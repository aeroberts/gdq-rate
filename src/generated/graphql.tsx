import { DocumentNode } from 'graphql';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  interval: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Output = {
  __typename?: 'Output';
  result: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  result: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "chat" */
export type Chat = {
  __typename?: 'chat';
  body: Scalars['String'];
  chat_id: Scalars['uuid'];
  sent_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** input type for inserting array relation for remote table "chat" */
export type Chat_Arr_Rel_Insert_Input = {
  data: Array<Chat_Insert_Input>;
};

/** Boolean expression to filter rows from the table "chat". All fields are combined with a logical 'AND'. */
export type Chat_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_Bool_Exp>>>;
  _not?: Maybe<Chat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chat_Bool_Exp>>>;
  body?: Maybe<String_Comparison_Exp>;
  chat_id?: Maybe<Uuid_Comparison_Exp>;
  sent_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "chat" */
export type Chat_Insert_Input = {
  body?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "chat" */
export type Chat_Mutation_Response = {
  __typename?: 'chat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chat>;
};

/** input type for inserting object relation for remote table "chat" */
export type Chat_Obj_Rel_Insert_Input = {
  data: Chat_Insert_Input;
};

/** ordering options when selecting data from "chat" */
export type Chat_Order_By = {
  body?: Maybe<Order_By>;
  chat_id?: Maybe<Order_By>;
  sent_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "chat" */
export type Chat_Pk_Columns_Input = {
  chat_id: Scalars['uuid'];
};

/** select columns of table "chat" */
export enum Chat_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  SentAt = 'sent_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "current_run" */
export type Current_Run = {
  __typename?: 'current_run';
  category?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['interval']>;
  game?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  run_id?: Maybe<Scalars['Int']>;
  runner?: Maybe<Scalars['String']>;
  starting_at?: Maybe<Scalars['timestamptz']>;
};

/** Boolean expression to filter rows from the table "current_run". All fields are combined with a logical 'AND'. */
export type Current_Run_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Current_Run_Bool_Exp>>>;
  _not?: Maybe<Current_Run_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Current_Run_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  duration?: Maybe<Interval_Comparison_Exp>;
  game?: Maybe<String_Comparison_Exp>;
  platform?: Maybe<String_Comparison_Exp>;
  run_id?: Maybe<Int_Comparison_Exp>;
  runner?: Maybe<String_Comparison_Exp>;
  starting_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** ordering options when selecting data from "current_run" */
export type Current_Run_Order_By = {
  category?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  game?: Maybe<Order_By>;
  platform?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
  runner?: Maybe<Order_By>;
  starting_at?: Maybe<Order_By>;
};

/** select columns of table "current_run" */
export enum Current_Run_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Duration = 'duration',
  /** column name */
  Game = 'game',
  /** column name */
  Platform = 'platform',
  /** column name */
  RunId = 'run_id',
  /** column name */
  Runner = 'runner',
  /** column name */
  StartingAt = 'starting_at'
}

/** columns and relationships of "current_user_v" */
export type Current_User_V = {
  __typename?: 'current_user_v';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** Boolean expression to filter rows from the table "current_user_v". All fields are combined with a logical 'AND'. */
export type Current_User_V_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Current_User_V_Bool_Exp>>>;
  _not?: Maybe<Current_User_V_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Current_User_V_Bool_Exp>>>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** ordering options when selecting data from "current_user_v" */
export type Current_User_V_Order_By = {
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "current_user_v" */
export enum Current_User_V_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}


/** expression to compare columns of type interval. All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: Maybe<Scalars['interval']>;
  _gt?: Maybe<Scalars['interval']>;
  _gte?: Maybe<Scalars['interval']>;
  _in?: Maybe<Array<Scalars['interval']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['interval']>;
  _lte?: Maybe<Scalars['interval']>;
  _neq?: Maybe<Scalars['interval']>;
  _nin?: Maybe<Array<Scalars['interval']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert data into the table: "chat" */
  insert_chat?: Maybe<Chat_Mutation_Response>;
  /** insert a single row into the table: "chat" */
  insert_chat_one?: Maybe<Chat>;
  /** insert data into the table: "scores" */
  insert_scores?: Maybe<Scores_Mutation_Response>;
  /** insert a single row into the table: "scores" */
  insert_scores_one?: Maybe<Scores>;
  /** update data of the table: "scores" */
  update_scores?: Maybe<Scores_Mutation_Response>;
  /** update single row of the table: "scores" */
  update_scores_by_pk?: Maybe<Scores>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootInsert_ChatArgs = {
  objects: Array<Chat_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_OneArgs = {
  object: Chat_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ScoresArgs = {
  objects: Array<Scores_Insert_Input>;
  on_conflict?: Maybe<Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scores_OneArgs = {
  object: Scores_Insert_Input;
  on_conflict?: Maybe<Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ScoresArgs = {
  _inc?: Maybe<Scores_Inc_Input>;
  _set?: Maybe<Scores_Set_Input>;
  where: Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scores_By_PkArgs = {
  _inc?: Maybe<Scores_Inc_Input>;
  _set?: Maybe<Scores_Set_Input>;
  pk_columns: Scores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "chat" */
  chat: Array<Chat>;
  /** fetch data from the table: "chat" using primary key columns */
  chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "current_run" */
  current_run: Array<Current_Run>;
  /** fetch data from the table: "current_user_v" */
  current_user_v: Array<Current_User_V>;
  /** fetch data from the table: "runs" */
  runs: Array<Runs>;
  /** fetch data from the table: "runs" using primary key columns */
  runs_by_pk?: Maybe<Runs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "scores" using primary key columns */
  scores_by_pk?: Maybe<Scores>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootChatArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** query root */
export type Query_RootChat_By_PkArgs = {
  chat_id: Scalars['uuid'];
};


/** query root */
export type Query_RootCurrent_RunArgs = {
  distinct_on?: Maybe<Array<Current_Run_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_Run_Order_By>>;
  where?: Maybe<Current_Run_Bool_Exp>;
};


/** query root */
export type Query_RootCurrent_User_VArgs = {
  distinct_on?: Maybe<Array<Current_User_V_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_User_V_Order_By>>;
  where?: Maybe<Current_User_V_Bool_Exp>;
};


/** query root */
export type Query_RootRunsArgs = {
  distinct_on?: Maybe<Array<Runs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Runs_Order_By>>;
  where?: Maybe<Runs_Bool_Exp>;
};


/** query root */
export type Query_RootRuns_By_PkArgs = {
  run_id: Scalars['Int'];
};


/** query root */
export type Query_RootScoresArgs = {
  distinct_on?: Maybe<Array<Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Scores_Order_By>>;
  where?: Maybe<Scores_Bool_Exp>;
};


/** query root */
export type Query_RootScores_AggregateArgs = {
  distinct_on?: Maybe<Array<Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Scores_Order_By>>;
  where?: Maybe<Scores_Bool_Exp>;
};


/** query root */
export type Query_RootScores_By_PkArgs = {
  run_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "runs" */
export type Runs = {
  __typename?: 'runs';
  category: Scalars['String'];
  duration: Scalars['interval'];
  game: Scalars['String'];
  platform?: Maybe<Scalars['String']>;
  run_id: Scalars['Int'];
  runner: Scalars['String'];
  /** An array relationship */
  scores: Array<Scores>;
  /** An aggregated array relationship */
  scores_aggregate: Scores_Aggregate;
};


/** columns and relationships of "runs" */
export type RunsScoresArgs = {
  distinct_on?: Maybe<Array<Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Scores_Order_By>>;
  where?: Maybe<Scores_Bool_Exp>;
};


/** columns and relationships of "runs" */
export type RunsScores_AggregateArgs = {
  distinct_on?: Maybe<Array<Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Scores_Order_By>>;
  where?: Maybe<Scores_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "runs". All fields are combined with a logical 'AND'. */
export type Runs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Runs_Bool_Exp>>>;
  _not?: Maybe<Runs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Runs_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  duration?: Maybe<Interval_Comparison_Exp>;
  game?: Maybe<String_Comparison_Exp>;
  platform?: Maybe<String_Comparison_Exp>;
  run_id?: Maybe<Int_Comparison_Exp>;
  runner?: Maybe<String_Comparison_Exp>;
  scores?: Maybe<Scores_Bool_Exp>;
};

/** ordering options when selecting data from "runs" */
export type Runs_Order_By = {
  category?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  game?: Maybe<Order_By>;
  platform?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
  runner?: Maybe<Order_By>;
  scores_aggregate?: Maybe<Scores_Aggregate_Order_By>;
};

/** primary key columns input for table: "runs" */
export type Runs_Pk_Columns_Input = {
  run_id: Scalars['Int'];
};

/** select columns of table "runs" */
export enum Runs_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Duration = 'duration',
  /** column name */
  Game = 'game',
  /** column name */
  Platform = 'platform',
  /** column name */
  RunId = 'run_id',
  /** column name */
  Runner = 'runner'
}

/** columns and relationships of "scores" */
export type Scores = {
  __typename?: 'scores';
  commentary_comment: Scalars['String'];
  commentary_score: Scalars['Int'];
  gameplay_comment: Scalars['String'];
  gameplay_score: Scalars['Int'];
  overall_comment: Scalars['String'];
  overall_score: Scalars['Int'];
  rewatchable: Scalars['Boolean'];
  /** An object relationship */
  run: Runs;
  run_id: Scalars['Int'];
  submitted_at: Scalars['timestamptz'];
  summary_comment: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "scores" */
export type Scores_Aggregate = {
  __typename?: 'scores_aggregate';
  aggregate?: Maybe<Scores_Aggregate_Fields>;
  nodes: Array<Scores>;
};

/** aggregate fields of "scores" */
export type Scores_Aggregate_Fields = {
  __typename?: 'scores_aggregate_fields';
  avg?: Maybe<Scores_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Scores_Max_Fields>;
  min?: Maybe<Scores_Min_Fields>;
  stddev?: Maybe<Scores_Stddev_Fields>;
  stddev_pop?: Maybe<Scores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scores_Stddev_Samp_Fields>;
  sum?: Maybe<Scores_Sum_Fields>;
  var_pop?: Maybe<Scores_Var_Pop_Fields>;
  var_samp?: Maybe<Scores_Var_Samp_Fields>;
  variance?: Maybe<Scores_Variance_Fields>;
};


/** aggregate fields of "scores" */
export type Scores_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Scores_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "scores" */
export type Scores_Aggregate_Order_By = {
  avg?: Maybe<Scores_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Scores_Max_Order_By>;
  min?: Maybe<Scores_Min_Order_By>;
  stddev?: Maybe<Scores_Stddev_Order_By>;
  stddev_pop?: Maybe<Scores_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Scores_Stddev_Samp_Order_By>;
  sum?: Maybe<Scores_Sum_Order_By>;
  var_pop?: Maybe<Scores_Var_Pop_Order_By>;
  var_samp?: Maybe<Scores_Var_Samp_Order_By>;
  variance?: Maybe<Scores_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "scores" */
export type Scores_Arr_Rel_Insert_Input = {
  data: Array<Scores_Insert_Input>;
  on_conflict?: Maybe<Scores_On_Conflict>;
};

/** aggregate avg on columns */
export type Scores_Avg_Fields = {
  __typename?: 'scores_avg_fields';
  commentary_score?: Maybe<Scalars['Float']>;
  gameplay_score?: Maybe<Scalars['Float']>;
  overall_score?: Maybe<Scalars['Float']>;
  run_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "scores" */
export type Scores_Avg_Order_By = {
  commentary_score?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "scores". All fields are combined with a logical 'AND'. */
export type Scores_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Scores_Bool_Exp>>>;
  _not?: Maybe<Scores_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Scores_Bool_Exp>>>;
  commentary_comment?: Maybe<String_Comparison_Exp>;
  commentary_score?: Maybe<Int_Comparison_Exp>;
  gameplay_comment?: Maybe<String_Comparison_Exp>;
  gameplay_score?: Maybe<Int_Comparison_Exp>;
  overall_comment?: Maybe<String_Comparison_Exp>;
  overall_score?: Maybe<Int_Comparison_Exp>;
  rewatchable?: Maybe<Boolean_Comparison_Exp>;
  run?: Maybe<Runs_Bool_Exp>;
  run_id?: Maybe<Int_Comparison_Exp>;
  submitted_at?: Maybe<Timestamptz_Comparison_Exp>;
  summary_comment?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "scores" */
export enum Scores_Constraint {
  /** unique or primary key constraint */
  ScoresPkey = 'scores_pkey'
}

/** input type for incrementing integer column in table "scores" */
export type Scores_Inc_Input = {
  commentary_score?: Maybe<Scalars['Int']>;
  gameplay_score?: Maybe<Scalars['Int']>;
  overall_score?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "scores" */
export type Scores_Insert_Input = {
  commentary_comment?: Maybe<Scalars['String']>;
  commentary_score?: Maybe<Scalars['Int']>;
  gameplay_comment?: Maybe<Scalars['String']>;
  gameplay_score?: Maybe<Scalars['Int']>;
  overall_comment?: Maybe<Scalars['String']>;
  overall_score?: Maybe<Scalars['Int']>;
  rewatchable?: Maybe<Scalars['Boolean']>;
  run_id?: Maybe<Scalars['Int']>;
  summary_comment?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Scores_Max_Fields = {
  __typename?: 'scores_max_fields';
  commentary_comment?: Maybe<Scalars['String']>;
  commentary_score?: Maybe<Scalars['Int']>;
  gameplay_comment?: Maybe<Scalars['String']>;
  gameplay_score?: Maybe<Scalars['Int']>;
  overall_comment?: Maybe<Scalars['String']>;
  overall_score?: Maybe<Scalars['Int']>;
  run_id?: Maybe<Scalars['Int']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
  summary_comment?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "scores" */
export type Scores_Max_Order_By = {
  commentary_comment?: Maybe<Order_By>;
  commentary_score?: Maybe<Order_By>;
  gameplay_comment?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_comment?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
  summary_comment?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Scores_Min_Fields = {
  __typename?: 'scores_min_fields';
  commentary_comment?: Maybe<Scalars['String']>;
  commentary_score?: Maybe<Scalars['Int']>;
  gameplay_comment?: Maybe<Scalars['String']>;
  gameplay_score?: Maybe<Scalars['Int']>;
  overall_comment?: Maybe<Scalars['String']>;
  overall_score?: Maybe<Scalars['Int']>;
  run_id?: Maybe<Scalars['Int']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
  summary_comment?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "scores" */
export type Scores_Min_Order_By = {
  commentary_comment?: Maybe<Order_By>;
  commentary_score?: Maybe<Order_By>;
  gameplay_comment?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_comment?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
  summary_comment?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "scores" */
export type Scores_Mutation_Response = {
  __typename?: 'scores_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Scores>;
};

/** input type for inserting object relation for remote table "scores" */
export type Scores_Obj_Rel_Insert_Input = {
  data: Scores_Insert_Input;
  on_conflict?: Maybe<Scores_On_Conflict>;
};

/** on conflict condition type for table "scores" */
export type Scores_On_Conflict = {
  constraint: Scores_Constraint;
  update_columns: Array<Scores_Update_Column>;
  where?: Maybe<Scores_Bool_Exp>;
};

/** ordering options when selecting data from "scores" */
export type Scores_Order_By = {
  commentary_comment?: Maybe<Order_By>;
  commentary_score?: Maybe<Order_By>;
  gameplay_comment?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_comment?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  rewatchable?: Maybe<Order_By>;
  run?: Maybe<Runs_Order_By>;
  run_id?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
  summary_comment?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "scores" */
export type Scores_Pk_Columns_Input = {
  run_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};

/** select columns of table "scores" */
export enum Scores_Select_Column {
  /** column name */
  CommentaryComment = 'commentary_comment',
  /** column name */
  CommentaryScore = 'commentary_score',
  /** column name */
  GameplayComment = 'gameplay_comment',
  /** column name */
  GameplayScore = 'gameplay_score',
  /** column name */
  OverallComment = 'overall_comment',
  /** column name */
  OverallScore = 'overall_score',
  /** column name */
  Rewatchable = 'rewatchable',
  /** column name */
  RunId = 'run_id',
  /** column name */
  SubmittedAt = 'submitted_at',
  /** column name */
  SummaryComment = 'summary_comment',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "scores" */
export type Scores_Set_Input = {
  commentary_comment?: Maybe<Scalars['String']>;
  commentary_score?: Maybe<Scalars['Int']>;
  gameplay_comment?: Maybe<Scalars['String']>;
  gameplay_score?: Maybe<Scalars['Int']>;
  overall_comment?: Maybe<Scalars['String']>;
  overall_score?: Maybe<Scalars['Int']>;
  rewatchable?: Maybe<Scalars['Boolean']>;
  summary_comment?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Scores_Stddev_Fields = {
  __typename?: 'scores_stddev_fields';
  commentary_score?: Maybe<Scalars['Float']>;
  gameplay_score?: Maybe<Scalars['Float']>;
  overall_score?: Maybe<Scalars['Float']>;
  run_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "scores" */
export type Scores_Stddev_Order_By = {
  commentary_score?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Scores_Stddev_Pop_Fields = {
  __typename?: 'scores_stddev_pop_fields';
  commentary_score?: Maybe<Scalars['Float']>;
  gameplay_score?: Maybe<Scalars['Float']>;
  overall_score?: Maybe<Scalars['Float']>;
  run_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "scores" */
export type Scores_Stddev_Pop_Order_By = {
  commentary_score?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Scores_Stddev_Samp_Fields = {
  __typename?: 'scores_stddev_samp_fields';
  commentary_score?: Maybe<Scalars['Float']>;
  gameplay_score?: Maybe<Scalars['Float']>;
  overall_score?: Maybe<Scalars['Float']>;
  run_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "scores" */
export type Scores_Stddev_Samp_Order_By = {
  commentary_score?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Scores_Sum_Fields = {
  __typename?: 'scores_sum_fields';
  commentary_score?: Maybe<Scalars['Int']>;
  gameplay_score?: Maybe<Scalars['Int']>;
  overall_score?: Maybe<Scalars['Int']>;
  run_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "scores" */
export type Scores_Sum_Order_By = {
  commentary_score?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
};

/** update columns of table "scores" */
export enum Scores_Update_Column {
  /** column name */
  CommentaryComment = 'commentary_comment',
  /** column name */
  CommentaryScore = 'commentary_score',
  /** column name */
  GameplayComment = 'gameplay_comment',
  /** column name */
  GameplayScore = 'gameplay_score',
  /** column name */
  OverallComment = 'overall_comment',
  /** column name */
  OverallScore = 'overall_score',
  /** column name */
  Rewatchable = 'rewatchable',
  /** column name */
  SummaryComment = 'summary_comment'
}

/** aggregate var_pop on columns */
export type Scores_Var_Pop_Fields = {
  __typename?: 'scores_var_pop_fields';
  commentary_score?: Maybe<Scalars['Float']>;
  gameplay_score?: Maybe<Scalars['Float']>;
  overall_score?: Maybe<Scalars['Float']>;
  run_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "scores" */
export type Scores_Var_Pop_Order_By = {
  commentary_score?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Scores_Var_Samp_Fields = {
  __typename?: 'scores_var_samp_fields';
  commentary_score?: Maybe<Scalars['Float']>;
  gameplay_score?: Maybe<Scalars['Float']>;
  overall_score?: Maybe<Scalars['Float']>;
  run_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "scores" */
export type Scores_Var_Samp_Order_By = {
  commentary_score?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Scores_Variance_Fields = {
  __typename?: 'scores_variance_fields';
  commentary_score?: Maybe<Scalars['Float']>;
  gameplay_score?: Maybe<Scalars['Float']>;
  overall_score?: Maybe<Scalars['Float']>;
  run_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "scores" */
export type Scores_Variance_Order_By = {
  commentary_score?: Maybe<Order_By>;
  gameplay_score?: Maybe<Order_By>;
  overall_score?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "chat" */
  chat: Array<Chat>;
  /** fetch data from the table: "chat" using primary key columns */
  chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "current_run" */
  current_run: Array<Current_Run>;
  /** fetch data from the table: "current_user_v" */
  current_user_v: Array<Current_User_V>;
  /** fetch data from the table: "runs" */
  runs: Array<Runs>;
  /** fetch data from the table: "runs" using primary key columns */
  runs_by_pk?: Maybe<Runs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "scores" using primary key columns */
  scores_by_pk?: Maybe<Scores>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootChatArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChat_By_PkArgs = {
  chat_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootCurrent_RunArgs = {
  distinct_on?: Maybe<Array<Current_Run_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_Run_Order_By>>;
  where?: Maybe<Current_Run_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCurrent_User_VArgs = {
  distinct_on?: Maybe<Array<Current_User_V_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_User_V_Order_By>>;
  where?: Maybe<Current_User_V_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRunsArgs = {
  distinct_on?: Maybe<Array<Runs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Runs_Order_By>>;
  where?: Maybe<Runs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRuns_By_PkArgs = {
  run_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootScoresArgs = {
  distinct_on?: Maybe<Array<Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Scores_Order_By>>;
  where?: Maybe<Scores_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootScores_AggregateArgs = {
  distinct_on?: Maybe<Array<Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Scores_Order_By>>;
  where?: Maybe<Scores_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootScores_By_PkArgs = {
  run_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  avatar_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  chats: Array<Chat>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  scores: Array<Scores>;
  /** An aggregated array relationship */
  scores_aggregate: Scores_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersChatsArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersScoresArgs = {
  distinct_on?: Maybe<Array<Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Scores_Order_By>>;
  where?: Maybe<Scores_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersScores_AggregateArgs = {
  distinct_on?: Maybe<Array<Scores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Scores_Order_By>>;
  where?: Maybe<Scores_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  chats?: Maybe<Chat_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  scores?: Maybe<Scores_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  scores_aggregate?: Maybe<Scores_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  DisplayName = 'display_name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetAllRunsSubscriptionVariables = Exact<{
  userId?: Maybe<Scalars['uuid']>;
  loggedIn: Scalars['Boolean'];
}>;


export type GetAllRunsSubscription = (
  { __typename?: 'subscription_root' }
  & { runs: Array<(
    { __typename?: 'runs' }
    & Pick<Runs, 'game' | 'category' | 'duration' | 'platform' | 'run_id' | 'runner'>
    & { scores_aggregate: (
      { __typename?: 'scores_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'scores_aggregate_fields' }
        & Pick<Scores_Aggregate_Fields, 'count'>
        & { sum?: Maybe<(
          { __typename?: 'scores_sum_fields' }
          & Pick<Scores_Sum_Fields, 'commentary_score' | 'overall_score' | 'gameplay_score'>
        )> }
      )> }
    ), myScores: Array<(
      { __typename?: 'scores' }
      & Pick<Scores, 'commentary_score' | 'overall_score' | 'gameplay_score'>
    )> }
  )> }
);

export type GetChatHistorySubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetChatHistorySubscription = (
  { __typename?: 'subscription_root' }
  & { chat: Array<(
    { __typename?: 'chat' }
    & Pick<Chat, 'body' | 'sent_at'>
    & { user?: Maybe<(
      { __typename?: 'users' }
      & Pick<Users, 'avatar_url' | 'display_name' | 'id'>
    )> }
  )> }
);

export type GetCurrentRunSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentRunSubscription = (
  { __typename?: 'subscription_root' }
  & { current_run: Array<(
    { __typename?: 'current_run' }
    & Pick<Current_Run, 'game' | 'run_id'>
  )> }
);

export type InsertScoreMutationVariables = Exact<{
  commentary_comment: Scalars['String'];
  commentary_score: Scalars['Int'];
  gameplay_comment: Scalars['String'];
  gameplay_score: Scalars['Int'];
  overall_comment: Scalars['String'];
  overall_score: Scalars['Int'];
  rewatchable: Scalars['Boolean'];
  run_id: Scalars['Int'];
  summary_comment: Scalars['String'];
}>;


export type InsertScoreMutation = (
  { __typename?: 'mutation_root' }
  & { insert_scores_one?: Maybe<{ __typename: 'scores' }> }
);

export type SendChatMutationVariables = Exact<{
  body: Scalars['String'];
}>;


export type SendChatMutation = (
  { __typename?: 'mutation_root' }
  & { insert_chat?: Maybe<(
    { __typename?: 'chat_mutation_response' }
    & Pick<Chat_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetSpecificRunSubscriptionVariables = Exact<{
  userId?: Maybe<Scalars['uuid']>;
  loggedIn: Scalars['Boolean'];
  runId: Scalars['Int'];
}>;


export type GetSpecificRunSubscription = (
  { __typename?: 'subscription_root' }
  & { runs: Array<(
    { __typename?: 'runs' }
    & Pick<Runs, 'game' | 'category' | 'duration' | 'platform' | 'run_id' | 'runner'>
    & { scores_aggregate: (
      { __typename?: 'scores_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'scores_aggregate_fields' }
        & { avg?: Maybe<(
          { __typename?: 'scores_avg_fields' }
          & Pick<Scores_Avg_Fields, 'commentary_score' | 'overall_score' | 'gameplay_score'>
        )> }
      )> }
    ), scores: Array<(
      { __typename?: 'scores' }
      & Pick<Scores, 'commentary_comment' | 'commentary_score' | 'gameplay_comment' | 'gameplay_score' | 'overall_comment' | 'overall_score' | 'summary_comment' | 'rewatchable'>
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'avatar_url' | 'display_name' | 'id'>
      ) }
    )>, myScores: Array<(
      { __typename?: 'scores' }
      & Pick<Scores, 'commentary_score' | 'overall_score' | 'gameplay_score'>
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  avatarUrl: Scalars['String'];
  displayName: Scalars['String'];
  userId: Scalars['uuid'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<Users, 'avatar_url' | 'display_name'>
    )> }
  )> }
);

export type UserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoQuery = (
  { __typename?: 'query_root' }
  & { current_user_v: Array<(
    { __typename?: 'current_user_v' }
    & Pick<Current_User_V, 'user_id' | 'display_name' | 'created_at' | 'avatar_url' | 'updated_at'>
  )> }
);

export type GetUserRunsQueryVariables = Exact<{
  userId?: Maybe<Scalars['uuid']>;
}>;


export type GetUserRunsQuery = (
  { __typename?: 'query_root' }
  & { scores: Array<(
    { __typename?: 'scores' }
    & Pick<Scores, 'commentary_comment' | 'commentary_score' | 'gameplay_comment' | 'gameplay_score' | 'overall_comment' | 'overall_score' | 'rewatchable' | 'summary_comment'>
    & { run: (
      { __typename?: 'runs' }
      & Pick<Runs, 'run_id' | 'runner' | 'game' | 'platform' | 'duration' | 'category'>
    ) }
  )>, users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'display_name' | 'avatar_url'>
  )> }
);


export const GetAllRunsDocument: TypedDocumentNode<GetAllRunsSubscription, GetAllRunsSubscriptionVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetAllRuns"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loggedIn"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"runs"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"duration"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"platform"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"run_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"runner"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"scores_aggregate"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sum"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentary_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"overall_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gameplay_score"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"myScores"},"name":{"kind":"Name","value":"scores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loggedIn"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentary_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"overall_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gameplay_score"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const GetChatHistoryDocument: TypedDocumentNode<GetChatHistorySubscription, GetChatHistorySubscriptionVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetChatHistory"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sent_at"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sent_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"display_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const GetCurrentRunDocument: TypedDocumentNode<GetCurrentRunSubscription, GetCurrentRunSubscriptionVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetCurrentRun"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current_run"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"run_id"},"arguments":[],"directives":[]}]}}]}}]};
export const InsertScoreDocument: TypedDocumentNode<InsertScoreMutation, InsertScoreMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentary_comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentary_score"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameplay_comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameplay_score"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"overall_comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"overall_score"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rewatchable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"run_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary_comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_scores_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commentary_comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentary_comment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commentary_score"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentary_score"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"gameplay_comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameplay_comment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"gameplay_score"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameplay_score"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"overall_comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"overall_comment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"overall_score"},"value":{"kind":"Variable","name":{"kind":"Name","value":"overall_score"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"rewatchable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rewatchable"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"run_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"run_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"summary_comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary_comment"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}}]}}]};
export const SendChatDocument: TypedDocumentNode<SendChatMutation, SendChatMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_chat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"},"arguments":[],"directives":[]}]}}]}}]};
export const GetSpecificRunDocument: TypedDocumentNode<GetSpecificRunSubscription, GetSpecificRunSubscriptionVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetSpecificRun"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loggedIn"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"runs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"run_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"duration"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"platform"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"run_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"runner"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"scores_aggregate"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentary_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"overall_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gameplay_score"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scores"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentary_comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentary_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gameplay_comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gameplay_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"overall_comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"overall_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"summary_comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rewatchable"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"display_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"myScores"},"name":{"kind":"Name","value":"scores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loggedIn"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentary_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"overall_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gameplay_score"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const UpdateUserDocument: TypedDocumentNode<UpdateUserMutation, UpdateUserMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatarUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"avatar_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatarUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"display_name"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const UserInfoDocument: TypedDocumentNode<UserInfoQuery, UserInfoQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserInfo"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current_user_v"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"display_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]}]}}]}}]};
export const GetUserRunsDocument: TypedDocumentNode<GetUserRunsQuery, GetUserRunsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserRuns"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentary_comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentary_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gameplay_comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gameplay_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"overall_comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"overall_score"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rewatchable"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"summary_comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"run"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"run_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"runner"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"platform"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"duration"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"},"arguments":[],"directives":[]}]}}]}}]};