import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { BsInfoCircle, BsFillGearFill } from "react-icons/bs";

const hiddenDocTypes = (listItem) => !["contact", "config"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Global config")
        .icon(() => <BsFillGearFill></BsFillGearFill>)
        .child(S.editor().id("config").schemaType("config").documentId("config")),
      S.listItem()
        .title("Contact information")
        .icon(() => <BsInfoCircle></BsInfoCircle>)
        .child(S.editor().id("contact").schemaType("contact").documentId("contact")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
