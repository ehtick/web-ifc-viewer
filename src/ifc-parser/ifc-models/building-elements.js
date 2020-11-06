import { newObject } from "../parser/parser-map.js";
import { ifcClass } from "../utils/globalProperties.js";
import { ifcDataTypes as d } from "../utils/ifc-data-types.js";
import { getName, ifcTypes as t } from "../utils/ifc-types.js";

newObject({
  [ifcClass]: getName(t.IfcMappedItem),
  MappingSource: d.id,
  MappingTarget: d.id,
});

newObject({
  [ifcClass]: getName(t.IfcWallStandardCase),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ObjectType: d.text,
  ObjectPlacement: d.id,
  Representation: d.id,
  Tag: d.text,
});

newObject({
  [ifcClass]: getName(t.IfcDoor),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ObjectType: d.text,
  ObjectPlacement: d.id,
  Representation: d.id,
  Tag: d.text,
  OverallHeight: d.number,
  OverallWidth: d.number,
});

newObject({
  [ifcClass]: getName(t.IfcSlab),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ObjectType: d.text,
  ObjectPlacement: d.id,
  Representation: d.id,
  Tag: d.text,
  PredefinedType: d.enum,
});

newObject({
  [ifcClass]: getName(t.IfcOpeningElement),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ObjectType: d.text,
  ObjectPlacement: d.id,
  Representation: d.id,
  Tag: d.text,
});