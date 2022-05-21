/* eslint-disable quotes */
// IMPORT MODULES under test here:
import {
  greetUsers,
  greetUsersOverAge60,
  addAllAges,
  getAverageCoolFactor,
  getTotalOfEachGender,
  getGenderBreakdownOfFordOwners,
  getGenderBreakdownOfEachCar,
  getAllCoolFactorsOfEachCar,
} from "../functions.js";
import customers from "./data.js";

const { test, skip } = QUnit;

test("greetUsers", (expect) => {
  const expected = true;

  const actual = greetUsers(customers);

  expect.equal(actual, expected);
});

test("greetUsersOverAge60", (expect) => {
  const expected = [
    "Hello Suzi Summerson!",
    "Hello Boot Penton!",
    "Hello Cacilia Caramuscia!",
    "Hello Cristal Oakman!",
    "Hello Kenny Kepe!",
    "Hello Dimitri Ochiltree!",
    "Hello Ilaire O'Codihie!",
    "Hello Anatol Gulley!",
    "Hello Salomone Merkle!",
    "Hello Alta Sulter!",
    "Hello Alexandros Cornell!",
    "Hello Thorn McMeekin!",
    "Hello Esmaria Moukes!",
    "Hello Munroe Walthall!",
    "Hello Tannie Sedman!",
  ];

  const actual = greetUsersOverAge60(customers);

  expect.deepEqual(actual, expected);
});

test("addAllAges", (expect) => {
  const expected = 2125;

  const actual = addAllAges(customers);

  expect.deepEqual(actual, expected);
});

test("getAverageCoolFactor", (expect) => {
  const expected = true;

  const actual = getAverageCoolFactor(customers);

  expect.equal(actual, expected);
});

test("getTotalOfEachGender", (expect) => {
  const expected = {
    Female: 19,
    Male: 23,
    Genderqueer: 1,
    Bigender: 1,
    "Non-binary": 1,
  };

  const actual = getTotalOfEachGender(customers);

  expect.deepEqual(actual, expected);
});

test("getGenderBreakdownOfFordOwners", (expect) => {
  const expected = {
    Female: 1,
    Male: 2,
  };

  const actual = getGenderBreakdownOfFordOwners(customers);

  expect.deepEqual(actual, expected);
});

test("getGenderBreakdownOfEachCar", (expect) => {
  const expected = {
    Bigender: 1,
    Female: 19,
    Genderqueer: 1,
    Male: 23,
    "Non-binary": 1,
  };

  const actual = getGenderBreakdownOfEachCar(customers);

  expect.deepEqual(actual, expected);
});

test("getAllCoolFactorsOfEachCar", (expect) => {
  const expected = true;

  const actual = getAllCoolFactorsOfEachCar(customers);

  expect.deepEqual(actual, expected);
});

skip("getAverageCoolFactorOfEachCar", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactor", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactor", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getCoolFactorsByAgeBracket", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactorByAgeBracket", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});
