const express = require("express");
const router = express.Router();
const sizeof = require("object-sizeof");
const getAllGroupInfo = require("../services/getAllGroupData");
const HTTPget = require("../../endpoints/nodeEndpoints");
const catalogGroups = require("../database/catalogGroups");
const contacts = require("../database/contacts");

const cache = {};

/* GET home page. */
router.get(HTTPget.home, function (req, res) {
  res.send("index");
});

router.get(HTTPget.group, async function (req, res) {
  const { id } = req.params;

  // Add cache for check id request and return if exist
  if (cache[id]) {
    console.log("Data from cache!");
    console.log(
      "Size of cache: ",
      sizeof(cache),
      "bytes",
      `\nOr this is ${sizeof(cache) / 1024} kbytes`,
      `\nOr this is ${sizeof(cache) / 1024 / 1024} Mbytes`
    );
    const fromCache = cache[id];
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(fromCache);
    return;
  }

  const data = await getAllGroupInfo(id);
  cache[id] = data;
  console.log("Data from request!");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
});

router.get(HTTPget.search, function (req, res) {
  const { name } = req.params;
  const url = `https://www.rcscomponents.kiev.ua/modules.php?name=Asers_Shop&s_op=search&query=${name}`;
  res.json({ url });
});

router.get(HTTPget.catalog, function (req, res) {
  const catalog = [
    {
      name: "Електронни компоненти та комплектующі",
      img: "electronic_components.png",
      id: 1,
    },
    { name: "Інструменти та обладнання", img: "soldering.png", id: 2 },
    {
      name: 'Навчающі конструктори "Практична електроніка"',
      img: "constructors.jpg",
      id: 3,
    },
  ];
  res.json(catalog);
});

router.get(HTTPget.catalogGroups, function (req, res) {
  const { id } = req.params;
  res.json(catalogGroups[id]);
});

router.get(HTTPget.groupName, function (req, res) {
  const { id } = req.params;
  const allGroups = Object.keys(catalogGroups).reduce((prev, curr) => {
    return [...prev, ...catalogGroups[curr]];
  }, []);
  const group = allGroups.find((group) => String(group.id) === id);
  if (group) {
    res.json(group.name);
  }
  res.json({ error: "Group with that id not exist!" });
});

router.get(HTTPget.slider, (req, res) => {
  const data = [
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Секція 1",
      description: "Секція 1",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Секція 2",
      description: "Секція 2",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Секція 3",
      description: "Секція 3",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
    {
      imgsrc:
        "https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg",
      title: "Назва товара",
      description: "Портативний 2х канальний осцилограф з мультиметром.",
    },
  ];
  res.json(data);
});

router.get(HTTPget.contacts, (req, res) => res.json(contacts));

module.exports = router;
