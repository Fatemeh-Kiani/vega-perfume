import dior from "./brands/dior.webp";
import chanel from "./brands/chanel.webp";
import tomford from "./brands/tomford.webp";
import byredo from "./brands/byredo.webp";
import amouage from "./brands/amouage.webp";
import joMalone from "./brands/jomalone.webp"

import mfk from "./brands/mfk.webp";
import leLabo from "./brands/lelabo.webp";

import hermes from "./brands/hermes.webp";
import prada from "./brands/prada.webp";
import gucci from "./brands/gucci.webp";
import versace from "./brands/versace.webp";
import ysl from "./brands/ysl.webp";
import aesop from "./brands/aesop.webp";
import diptyque from "./brands/diptyque.webp";
import givenchy from "./brands/givenchy.webp";
import penhaligons from "./brands/penhaligons.webp";


import women from "./perfumes/women.webp";
import men from "./perfumes/men.webp";
import unisex from "./perfumes/unisex.webp";

import floral from "./perfumes/floral.webp";
import fresh from "./perfumes/fresh.webp";
import citrus from "./perfumes/citrus.webp";
import woody from "./perfumes/woody.webp";
import amber from "./perfumes/amber.webp";
import fruity from "./perfumes/fruity.webp";
import aquatic from "./perfumes/aquatic.webp";
import spring from "./perfumes/spring.webp"
import summer from "./perfumes/summer.webp"
import winter from "./perfumes/winter.webp"
import autumn from "./perfumes/autumn.webp"


import body from "./body/body.webp";
import face from "./body/face.webp";
import hair from "./body/hair.webp";

import roomSpray from "./homeimg/room-spray.webp";
import incense from "./homeimg/incense.webp";
import candles from "./homeimg/candles.webp";

import gift from "./gifts/gift.webp";
import giftForHome from "./gifts/gift-for-home.webp";


export const Images = {
  brands: {
  dior,
  chanel,
  tomford,
  byredo,
  amouage,
  joMalone,

  mfk,
  leLabo,
  hermes,
  prada,
  gucci,
  versace,
  ysl,
  aesop,
  diptyque,
  penhaligons,
  givenchy,
},

  perfumes: {
  women,
  men,
  unisex,
  floral,
  woody,
  amber,
  citrus,
  fresh,
  fruity,
  aquatic,
  spring,
  summer,
  autumn,
  winter,



  },

 body: {
  body,
  face,
  hair,
},

  gifts: {
  gift ,
  giftForHome,

  
},

  home: {
  roomSpray,
  incense,
  candles,
},
} as const;