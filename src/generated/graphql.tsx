import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
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
  /** fetch data from the table: "runs" */
  runs: Array<Runs>;
  /** fetch data from the table: "runs" using primary key columns */
  runs_by_pk?: Maybe<Runs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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
  summary_comment?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
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
  summary_comment?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
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
  summary_comment?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
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
  SummaryComment = 'summary_comment',
  /** column name */
  UserId = 'user_id'
}

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
  /** fetch data from the table: "runs" */
  runs: Array<Runs>;
  /** fetch data from the table: "runs" using primary key columns */
  runs_by_pk?: Maybe<Runs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  scores?: Maybe<Scores_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
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
        & { sum?: Maybe<(
          { __typename?: 'scores_sum_fields' }
          & Pick<Scores_Sum_Fields, 'commentary_score' | 'overall_score'>
        )> }
      )> }
    ), myScores: Array<(
      { __typename?: 'scores' }
      & Pick<Scores, 'commentary_score' | 'overall_score'>
    )> }
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
        & { sum?: Maybe<(
          { __typename?: 'scores_sum_fields' }
          & Pick<Scores_Sum_Fields, 'commentary_score' | 'overall_score'>
        )> }
      )> }
    ), myScores: Array<(
      { __typename?: 'scores' }
      & Pick<Scores, 'commentary_score' | 'overall_score'>
    )> }
  )> }
);

export type UserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'display_name' | 'created_at' | 'avatar_url' | 'updated_at'>
  )> }
);


export const GetAllRunsDocument = gql`
    subscription GetAllRuns($userId: uuid, $loggedIn: Boolean!) {
  runs {
    game
    category
    duration
    platform
    run_id
    runner
    scores_aggregate {
      aggregate {
        sum {
          commentary_score
          overall_score
        }
      }
    }
    myScores: scores(where: {user_id: {_eq: $userId}}) @include(if: $loggedIn) {
      commentary_score
      overall_score
    }
  }
}
    `;

/**
 * __useGetAllRunsSubscription__
 *
 * To run a query within a React component, call `useGetAllRunsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRunsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRunsSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *      loggedIn: // value for 'loggedIn'
 *   },
 * });
 */
export function useGetAllRunsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetAllRunsSubscription, GetAllRunsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetAllRunsSubscription, GetAllRunsSubscriptionVariables>(GetAllRunsDocument, baseOptions);
      }
export type GetAllRunsSubscriptionHookResult = ReturnType<typeof useGetAllRunsSubscription>;
export type GetAllRunsSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetAllRunsSubscription>;
export const GetSpecificRunDocument = gql`
    subscription GetSpecificRun($userId: uuid, $loggedIn: Boolean!, $runId: Int!) {
  runs(where: {run_id: {_eq: $runId}}) {
    game
    category
    duration
    platform
    run_id
    runner
    scores_aggregate {
      aggregate {
        sum {
          commentary_score
          overall_score
        }
      }
    }
    myScores: scores(where: {user_id: {_eq: $userId}}) @include(if: $loggedIn) {
      commentary_score
      overall_score
    }
  }
}
    `;

/**
 * __useGetSpecificRunSubscription__
 *
 * To run a query within a React component, call `useGetSpecificRunSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecificRunSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecificRunSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *      loggedIn: // value for 'loggedIn'
 *      runId: // value for 'runId'
 *   },
 * });
 */
export function useGetSpecificRunSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetSpecificRunSubscription, GetSpecificRunSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetSpecificRunSubscription, GetSpecificRunSubscriptionVariables>(GetSpecificRunDocument, baseOptions);
      }
export type GetSpecificRunSubscriptionHookResult = ReturnType<typeof useGetSpecificRunSubscription>;
export type GetSpecificRunSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetSpecificRunSubscription>;
export const UserInfoDocument = gql`
    query UserInfo {
  users {
    id
    display_name
    created_at
    avatar_url
    updated_at
  }
}
    `;

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, baseOptions);
      }
export function useUserInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, baseOptions);
        }
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>;
export type UserInfoLazyQueryHookResult = ReturnType<typeof useUserInfoLazyQuery>;
export type UserInfoQueryResult = ApolloReactCommon.QueryResult<UserInfoQuery, UserInfoQueryVariables>;