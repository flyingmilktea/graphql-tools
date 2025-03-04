import { GraphQLSchema, GraphQLEnumValueConfig, ExecutionResult } from 'graphql';

import { ExecutionRequest, MapperKind, mapSchema, Maybe } from '@graphql-tools/utils';

import { Transform, DelegationContext, SubschemaConfig } from '@graphql-tools/delegate';

import { EnumValueTransformer, LeafValueTransformer } from '../types.js';

import MapLeafValues, { MapLeafValuesTransformationContext } from './MapLeafValues.js';

interface TransformEnumValuesTransformationContext extends MapLeafValuesTransformationContext {}

export default class TransformEnumValues<TContext = Record<string, any>>
  implements Transform<TransformEnumValuesTransformationContext, TContext>
{
  private readonly enumValueTransformer: EnumValueTransformer;
  private readonly transformer: MapLeafValues<TContext>;
  private transformedSchema: GraphQLSchema | undefined;
  private mapping: Record<string, Record<string, string>>;
  private reverseMapping: Record<string, Record<string, string>>;

  constructor(
    enumValueTransformer: EnumValueTransformer,
    inputValueTransformer?: LeafValueTransformer,
    outputValueTransformer?: LeafValueTransformer
  ) {
    this.enumValueTransformer = enumValueTransformer;
    this.mapping = Object.create(null);
    this.reverseMapping = Object.create(null);
    this.transformer = new MapLeafValues(
      generateValueTransformer(inputValueTransformer, this.reverseMapping),
      generateValueTransformer(outputValueTransformer, this.mapping)
    );
  }

  public transformSchema(
    originalWrappingSchema: GraphQLSchema,
    subschemaConfig: SubschemaConfig<any, any, any, TContext>,
    transformedSchema?: GraphQLSchema
  ): GraphQLSchema {
    const mappingSchema = this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    this.transformedSchema = mapSchema(mappingSchema, {
      [MapperKind.ENUM_VALUE]: (valueConfig, typeName, _schema, externalValue) =>
        this.transformEnumValue(typeName, externalValue, valueConfig),
    });
    return this.transformedSchema;
  }

  public transformRequest(
    originalRequest: ExecutionRequest,
    delegationContext: DelegationContext<TContext>,
    transformationContext: TransformEnumValuesTransformationContext
  ): ExecutionRequest {
    return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
  }

  public transformResult(
    originalResult: ExecutionResult,
    delegationContext: DelegationContext<TContext>,
    transformationContext: TransformEnumValuesTransformationContext
  ) {
    return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
  }

  private transformEnumValue(
    typeName: string,
    externalValue: string,
    enumValueConfig: GraphQLEnumValueConfig
  ): Maybe<GraphQLEnumValueConfig | [string, GraphQLEnumValueConfig]> {
    const transformedEnumValue = this.enumValueTransformer(typeName, externalValue, enumValueConfig);
    if (Array.isArray(transformedEnumValue)) {
      const newExternalValue = transformedEnumValue[0];

      if (newExternalValue !== externalValue) {
        if (!(typeName in this.mapping)) {
          this.mapping[typeName] = Object.create(null);
          this.reverseMapping[typeName] = Object.create(null);
        }
        this.mapping[typeName][externalValue] = newExternalValue;
        this.reverseMapping[typeName][newExternalValue] = externalValue;
      }
    }
    return transformedEnumValue;
  }
}

function mapEnumValues(typeName: string, value: string, mapping: Record<string, Record<string, string>>): string {
  const newExternalValue = mapping[typeName]?.[value];
  return newExternalValue != null ? newExternalValue : value;
}

function generateValueTransformer(
  valueTransformer: Maybe<LeafValueTransformer>,
  mapping: Record<string, Record<string, string>>
): LeafValueTransformer {
  if (valueTransformer == null) {
    return (typeName, value) => mapEnumValues(typeName, value, mapping);
  } else {
    return (typeName, value) => mapEnumValues(typeName, valueTransformer(typeName, value), mapping);
  }
}
