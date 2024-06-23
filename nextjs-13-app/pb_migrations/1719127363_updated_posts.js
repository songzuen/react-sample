/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oajcmgcwb50cxad")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "77wkj6bd",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oajcmgcwb50cxad")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "77wkj6bd",
    "name": "Type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
