import {
  type DefinitionsForEncodingField,
  type DefinitionsForEncodingObject,
  encodeObject,
  encodeObjects,
  type FieldsAndDefinitionsForEncodingThem,
  type GetObjectAsRecord,
} from "../encode.js";
import type {
  EncodedTestingPlayer,
  default as TestingPlayer,
} from "../Player.js";

type DefinitionsForEncodingPlayer = DefinitionsForEncodingObject & {
  fieldsAndDefinitionsForEncodingThem: FieldsOfPlayerAndDefinitionsForEncodingThem;
};

type FieldsOfPlayerAndDefinitionsForEncodingThem = [
  ...{
    definitions: DefinitionsForEncodingField;
    key: keyof EncodedTestingPlayer;
  }[],
] &
  FieldsAndDefinitionsForEncodingThem;

const fieldsOfPlayerAndDefaultDefinitionsForEncodingThem: FieldsOfPlayerAndDefinitionsForEncodingThem =
  [
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "symbol",
    },
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "name",
    },
  ];

const defaultDefinitionsForEncodingPlayer: DefinitionsForEncodingPlayer = {
  fieldsAndDefinitionsForEncodingThem:
    fieldsOfPlayerAndDefaultDefinitionsForEncodingThem,
  surround: true,
};

const getPlayerAsRecord: GetObjectAsRecord<TestingPlayer> = player => ({
  name: player.getName(),
  symbol: player.getSymbol(),
});

const encodePlayer = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingPlayer,
  player,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingPlayer;
  player: TestingPlayer;
}): string =>
  encodeObject({
    definitionsForEncodingObject,
    object: getPlayerAsRecord(player),
  });

const encodePlayers = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingPlayer,
  players,
  surround = true,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingPlayer;
  players: readonly TestingPlayer[];
  surround?: boolean;
}): string =>
  encodeObjects({
    definitionsForEncodingObject,
    objects: players.map(player => getPlayerAsRecord(player)),
    surround,
  });

export { encodePlayer, encodePlayers };
