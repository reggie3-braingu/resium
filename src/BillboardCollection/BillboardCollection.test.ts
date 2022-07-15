import { expectType, TypeEqual } from "ts-expect";
import { BillboardCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { BillboardCollectionProps, BillboardCollectionOtherProps } from "./BillboardCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  BillboardCollection,
  Omit<BillboardCollectionProps, keyof BillboardCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
