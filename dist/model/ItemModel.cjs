"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/model/ItemModel.ts
var ItemModel_exports = {};
__export(ItemModel_exports, {
  Item: () => Item
});
module.exports = __toCommonJS(ItemModel_exports);
var import_mongoose = require("mongoose");
var ItemSchema = new import_mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, required: true },
    isCompleted: { type: Boolean, required: true }
  },
  {
    versionKey: false
  }
);
var Item = (0, import_mongoose.model)("Item", ItemSchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Item
});
