import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpdateWhitelistValidator {
  public category: Categories;

  public type: string;

  public json: object;

  public cosmosSender: string;

  constructor(payload: object) {
    this.category = 'ethbridge';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.cosmosSender = R.pathOr('', ['cosmosSender'], payload);
  }

  static fromJson(json: object): MsgUpdateWhitelistValidator {
    return {
      category: 'ethbridge',
      json,
      type: R.pathOr('', ['@type'], json),
      cosmosSender: R.pathOr('', ['cosmos_sender'], json),
    };
  }
}

export default MsgUpdateWhitelistValidator;
