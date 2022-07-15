import { expectType, TypeEqual } from "ts-expect";
import { ImageryLayerCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { cesiumEventProps, ImageryLayerCollectionProps } from "./ImageryLayerCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  ImageryLayerCollection,
  ImageryLayerCollectionProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
