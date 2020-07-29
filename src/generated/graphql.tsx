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
  citext: any;
  interval: any;
  jsonb: any;
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

/** columns and relationships of "auth.account_providers" */
export type Auth_Account_Providers = {
  __typename?: 'auth_account_providers';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  auth_provider: Scalars['String'];
  auth_provider_unique_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: Auth_Providers;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate = {
  __typename?: 'auth_account_providers_aggregate';
  aggregate?: Maybe<Auth_Account_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Account_Providers>;
};

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Fields = {
  __typename?: 'auth_account_providers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Account_Providers_Max_Fields>;
  min?: Maybe<Auth_Account_Providers_Min_Fields>;
};


/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Providers_Max_Order_By>;
  min?: Maybe<Auth_Account_Providers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Account_Providers_Bool_Exp>>>;
  _not?: Maybe<Auth_Account_Providers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Account_Providers_Bool_Exp>>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  auth_provider?: Maybe<String_Comparison_Exp>;
  auth_provider_unique_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider?: Maybe<Auth_Providers_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account_providers" */
export enum Auth_Account_Providers_Constraint {
  /** unique or primary key constraint */
  AccountProvidersAccountIdAuthProviderKey = 'account_providers_account_id_auth_provider_key',
  /** unique or primary key constraint */
  AccountProvidersAuthProviderAuthProviderUniqueIdKey = 'account_providers_auth_provider_auth_provider_unique_id_key',
  /** unique or primary key constraint */
  AccountProvidersPkey = 'account_providers_pkey'
}

/** input type for inserting data into table "auth.account_providers" */
export type Auth_Account_Providers_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Auth_Providers_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Account_Providers_Max_Fields = {
  __typename?: 'auth_account_providers_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Providers_Min_Fields = {
  __typename?: 'auth_account_providers_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_providers" */
export type Auth_Account_Providers_Mutation_Response = {
  __typename?: 'auth_account_providers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Account_Providers>;
};

/** input type for inserting object relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Account_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};

/** on conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint;
  update_columns: Array<Auth_Account_Providers_Update_Column>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** ordering options when selecting data from "auth.account_providers" */
export type Auth_Account_Providers_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider?: Maybe<Auth_Providers_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "auth.account_providers" */
export type Auth_Account_Providers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.account_providers" */
export type Auth_Account_Providers_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.account_roles" */
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Auth_Roles;
};

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Account_Roles>;
};

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Account_Roles_Max_Fields>;
  min?: Maybe<Auth_Account_Roles_Min_Fields>;
};


/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Roles_Max_Order_By>;
  min?: Maybe<Auth_Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Account_Roles_Bool_Exp>>>;
  _not?: Maybe<Auth_Account_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Account_Roles_Bool_Exp>>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  roleByRole?: Maybe<Auth_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export enum Auth_Account_Roles_Constraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey',
  /** unique or primary key constraint */
  UserRolesAccountIdRoleKey = 'user_roles_account_id_role_key'
}

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  roleByRole?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Account_Roles>;
};

/** input type for inserting object relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Account_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};

/** on conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns: Array<Auth_Account_Roles_Update_Column>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "auth.account_roles" */
export type Auth_Account_Roles_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Auth_Roles_Order_By>;
};

/** primary key columns input for table: "auth.account_roles" */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.account_roles" */
export type Auth_Account_Roles_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.accounts" */
export type Auth_Accounts = {
  __typename?: 'auth_accounts';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregated array relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregated array relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  mfa_enabled: Scalars['Boolean'];
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  /** An array relationship */
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** An aggregated array relationship */
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** An object relationship */
  role: Auth_Roles;
  ticket: Scalars['uuid'];
  ticket_expires_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsCustom_Register_DataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** aggregated selection of "auth.accounts" */
export type Auth_Accounts_Aggregate = {
  __typename?: 'auth_accounts_aggregate';
  aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>;
  nodes: Array<Auth_Accounts>;
};

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_Fields = {
  __typename?: 'auth_accounts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Accounts_Max_Fields>;
  min?: Maybe<Auth_Accounts_Min_Fields>;
};


/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Accounts_Max_Order_By>;
  min?: Maybe<Auth_Accounts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Append_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Accounts_Bool_Exp>>>;
  _not?: Maybe<Auth_Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Accounts_Bool_Exp>>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  active?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  custom_register_data?: Maybe<Jsonb_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  email?: Maybe<Citext_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  mfa_enabled?: Maybe<Boolean_Comparison_Exp>;
  new_email?: Maybe<Citext_Comparison_Exp>;
  otp_secret?: Maybe<String_Comparison_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  role?: Maybe<Auth_Roles_Bool_Exp>;
  ticket?: Maybe<Uuid_Comparison_Exp>;
  ticket_expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.accounts" */
export enum Auth_Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint */
  AccountsNewEmailKey = 'accounts_new_email_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint */
  AccountsUserIdKey = 'accounts_user_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Accounts_Delete_At_Path_Input = {
  custom_register_data?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Accounts_Delete_Elem_Input = {
  custom_register_data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Accounts_Delete_Key_Input = {
  custom_register_data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  role?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
  __typename?: 'auth_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.accounts" */
export type Auth_Accounts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
  __typename?: 'auth_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.accounts" */
export type Auth_Accounts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.accounts" */
export type Auth_Accounts_Mutation_Response = {
  __typename?: 'auth_accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Accounts>;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** on conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint;
  update_columns: Array<Auth_Accounts_Update_Column>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** ordering options when selecting data from "auth.accounts" */
export type Auth_Accounts_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  active?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  custom_register_data?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  mfa_enabled?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  refresh_tokens_aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  role?: Maybe<Auth_Roles_Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "auth.accounts" */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Prepend_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "auth.accounts" */
export enum Auth_Accounts_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.accounts" */
export type Auth_Accounts_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.accounts" */
export enum Auth_Accounts_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.providers" */
export type Auth_Providers = {
  __typename?: 'auth_providers';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregated array relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  provider: Scalars['String'];
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Providers>;
};

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Providers_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.providers" */
export type Auth_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Providers_Max_Order_By>;
  min?: Maybe<Auth_Providers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.providers" */
export type Auth_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Providers_Bool_Exp>>>;
  _not?: Maybe<Auth_Providers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Providers_Bool_Exp>>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum Auth_Providers_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields';
  provider?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.providers" */
export type Auth_Providers_Max_Order_By = {
  provider?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields';
  provider?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.providers" */
export type Auth_Providers_Min_Order_By = {
  provider?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Providers>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};

/** on conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns: Array<Auth_Providers_Update_Column>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

/** ordering options when selecting data from "auth.providers" */
export type Auth_Providers_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  provider?: Maybe<Order_By>;
};

/** primary key columns input for table: "auth.providers" */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum Auth_Providers_Select_Column {
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "auth.providers" */
export type Auth_Providers_Set_Input = {
  provider?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum Auth_Providers_Update_Column {
  /** column name */
  Provider = 'provider'
}

/** columns and relationships of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Refresh_Tokens_Max_Order_By>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Refresh_Tokens_Bool_Exp>>>;
  _not?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Refresh_Tokens_Bool_Exp>>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  refresh_token?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Refresh_Tokens>;
};

/** input type for inserting object relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Obj_Rel_Insert_Input = {
  data: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};

/** on conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** ordering options when selecting data from "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** primary key columns input for table: "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** columns and relationships of "auth.roles" */
export type Auth_Roles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregated array relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** An array relationship */
  accounts: Array<Auth_Accounts>;
  /** An aggregated array relationship */
  accounts_aggregate: Auth_Accounts_Aggregate;
  role: Scalars['String'];
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.roles" */
export type Auth_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Roles_Max_Order_By>;
  min?: Maybe<Auth_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.roles" */
export type Auth_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Roles_Bool_Exp>>>;
  _not?: Maybe<Auth_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Roles_Bool_Exp>>>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  accounts?: Maybe<Auth_Accounts_Bool_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  accounts?: Maybe<Auth_Accounts_Arr_Rel_Insert_Input>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.roles" */
export type Auth_Roles_Max_Order_By = {
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.roles" */
export type Auth_Roles_Min_Order_By = {
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};

/** on conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns: Array<Auth_Roles_Update_Column>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "auth.roles" */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  accounts_aggregate?: Maybe<Auth_Accounts_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: "auth.roles" */
export type Auth_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Role = 'role'
}


/** expression to compare columns of type citext. All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: Maybe<Scalars['citext']>;
  _gt?: Maybe<Scalars['citext']>;
  _gte?: Maybe<Scalars['citext']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['citext']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['citext']>;
  _lte?: Maybe<Scalars['citext']>;
  _neq?: Maybe<Scalars['citext']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['citext']>>;
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


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "runs" */
  delete_runs?: Maybe<Runs_Mutation_Response>;
  /** delete single row from the table: "runs" */
  delete_runs_by_pk?: Maybe<Runs>;
  /** delete data from the table: "scores" */
  delete_scores?: Maybe<Scores_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<Auth_Account_Providers>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>;
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<Auth_Accounts>;
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "runs" */
  insert_runs?: Maybe<Runs_Mutation_Response>;
  /** insert a single row into the table: "runs" */
  insert_runs_one?: Maybe<Runs>;
  /** insert data into the table: "scores" */
  insert_scores?: Maybe<Scores_Mutation_Response>;
  /** insert a single row into the table: "scores" */
  insert_scores_one?: Maybe<Scores>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "runs" */
  update_runs?: Maybe<Runs_Mutation_Response>;
  /** update single row of the table: "runs" */
  update_runs_by_pk?: Maybe<Runs>;
  /** update data of the table: "scores" */
  update_scores?: Maybe<Scores_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_ProvidersArgs = {
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RunsArgs = {
  where: Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Runs_By_PkArgs = {
  run_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ScoresArgs = {
  where: Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_ProvidersArgs = {
  objects: Array<Auth_Account_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Providers_OneArgs = {
  object: Auth_Account_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
  objects: Array<Auth_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
  object: Auth_Accounts_Insert_Input;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RunsArgs = {
  objects: Array<Runs_Insert_Input>;
  on_conflict?: Maybe<Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Runs_OneArgs = {
  object: Runs_Insert_Input;
  on_conflict?: Maybe<Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ScoresArgs = {
  objects: Array<Scores_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Scores_OneArgs = {
  object: Scores_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ProvidersArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  pk_columns: Auth_Account_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  pk_columns: Auth_Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  pk_columns: Auth_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  pk_columns: Auth_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RunsArgs = {
  _inc?: Maybe<Runs_Inc_Input>;
  _set?: Maybe<Runs_Set_Input>;
  where: Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Runs_By_PkArgs = {
  _inc?: Maybe<Runs_Inc_Input>;
  _set?: Maybe<Runs_Set_Input>;
  pk_columns: Runs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ScoresArgs = {
  _inc?: Maybe<Scores_Inc_Input>;
  _set?: Maybe<Scores_Set_Input>;
  where: Scores_Bool_Exp;
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
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "runs" */
  runs: Array<Runs>;
  /** fetch aggregated fields from the table: "runs" */
  runs_aggregate: Runs_Aggregate;
  /** fetch data from the table: "runs" using primary key columns */
  runs_by_pk?: Maybe<Runs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


/** query root */
export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** query root */
export type Query_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
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
export type Query_RootRuns_AggregateArgs = {
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
export type Query_RootUsers_AggregateArgs = {
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

/** aggregated selection of "runs" */
export type Runs_Aggregate = {
  __typename?: 'runs_aggregate';
  aggregate?: Maybe<Runs_Aggregate_Fields>;
  nodes: Array<Runs>;
};

/** aggregate fields of "runs" */
export type Runs_Aggregate_Fields = {
  __typename?: 'runs_aggregate_fields';
  avg?: Maybe<Runs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Runs_Max_Fields>;
  min?: Maybe<Runs_Min_Fields>;
  stddev?: Maybe<Runs_Stddev_Fields>;
  stddev_pop?: Maybe<Runs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Runs_Stddev_Samp_Fields>;
  sum?: Maybe<Runs_Sum_Fields>;
  var_pop?: Maybe<Runs_Var_Pop_Fields>;
  var_samp?: Maybe<Runs_Var_Samp_Fields>;
  variance?: Maybe<Runs_Variance_Fields>;
};


/** aggregate fields of "runs" */
export type Runs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Runs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "runs" */
export type Runs_Aggregate_Order_By = {
  avg?: Maybe<Runs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Runs_Max_Order_By>;
  min?: Maybe<Runs_Min_Order_By>;
  stddev?: Maybe<Runs_Stddev_Order_By>;
  stddev_pop?: Maybe<Runs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Runs_Stddev_Samp_Order_By>;
  sum?: Maybe<Runs_Sum_Order_By>;
  var_pop?: Maybe<Runs_Var_Pop_Order_By>;
  var_samp?: Maybe<Runs_Var_Samp_Order_By>;
  variance?: Maybe<Runs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "runs" */
export type Runs_Arr_Rel_Insert_Input = {
  data: Array<Runs_Insert_Input>;
  on_conflict?: Maybe<Runs_On_Conflict>;
};

/** aggregate avg on columns */
export type Runs_Avg_Fields = {
  __typename?: 'runs_avg_fields';
  run_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "runs" */
export type Runs_Avg_Order_By = {
  run_id?: Maybe<Order_By>;
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

/** unique or primary key constraints on table "runs" */
export enum Runs_Constraint {
  /** unique or primary key constraint */
  RunsPkey = 'runs_pkey'
}

/** input type for incrementing integer column in table "runs" */
export type Runs_Inc_Input = {
  run_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "runs" */
export type Runs_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['interval']>;
  game?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  run_id?: Maybe<Scalars['Int']>;
  runner?: Maybe<Scalars['String']>;
  scores?: Maybe<Scores_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Runs_Max_Fields = {
  __typename?: 'runs_max_fields';
  category?: Maybe<Scalars['String']>;
  game?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  run_id?: Maybe<Scalars['Int']>;
  runner?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "runs" */
export type Runs_Max_Order_By = {
  category?: Maybe<Order_By>;
  game?: Maybe<Order_By>;
  platform?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
  runner?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Runs_Min_Fields = {
  __typename?: 'runs_min_fields';
  category?: Maybe<Scalars['String']>;
  game?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  run_id?: Maybe<Scalars['Int']>;
  runner?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "runs" */
export type Runs_Min_Order_By = {
  category?: Maybe<Order_By>;
  game?: Maybe<Order_By>;
  platform?: Maybe<Order_By>;
  run_id?: Maybe<Order_By>;
  runner?: Maybe<Order_By>;
};

/** response of any mutation on the table "runs" */
export type Runs_Mutation_Response = {
  __typename?: 'runs_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Runs>;
};

/** input type for inserting object relation for remote table "runs" */
export type Runs_Obj_Rel_Insert_Input = {
  data: Runs_Insert_Input;
  on_conflict?: Maybe<Runs_On_Conflict>;
};

/** on conflict condition type for table "runs" */
export type Runs_On_Conflict = {
  constraint: Runs_Constraint;
  update_columns: Array<Runs_Update_Column>;
  where?: Maybe<Runs_Bool_Exp>;
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

/** input type for updating data in table "runs" */
export type Runs_Set_Input = {
  category?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['interval']>;
  game?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  run_id?: Maybe<Scalars['Int']>;
  runner?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Runs_Stddev_Fields = {
  __typename?: 'runs_stddev_fields';
  run_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "runs" */
export type Runs_Stddev_Order_By = {
  run_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Runs_Stddev_Pop_Fields = {
  __typename?: 'runs_stddev_pop_fields';
  run_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "runs" */
export type Runs_Stddev_Pop_Order_By = {
  run_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Runs_Stddev_Samp_Fields = {
  __typename?: 'runs_stddev_samp_fields';
  run_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "runs" */
export type Runs_Stddev_Samp_Order_By = {
  run_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Runs_Sum_Fields = {
  __typename?: 'runs_sum_fields';
  run_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "runs" */
export type Runs_Sum_Order_By = {
  run_id?: Maybe<Order_By>;
};

/** update columns of table "runs" */
export enum Runs_Update_Column {
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

/** aggregate var_pop on columns */
export type Runs_Var_Pop_Fields = {
  __typename?: 'runs_var_pop_fields';
  run_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "runs" */
export type Runs_Var_Pop_Order_By = {
  run_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Runs_Var_Samp_Fields = {
  __typename?: 'runs_var_samp_fields';
  run_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "runs" */
export type Runs_Var_Samp_Order_By = {
  run_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Runs_Variance_Fields = {
  __typename?: 'runs_variance_fields';
  run_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "runs" */
export type Runs_Variance_Order_By = {
  run_id?: Maybe<Order_By>;
};

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

/** input type for inserting array relation for remote table "scores" */
export type Scores_Arr_Rel_Insert_Input = {
  data: Array<Scores_Insert_Input>;
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

/** input type for incrementing integer column in table "scores" */
export type Scores_Inc_Input = {
  commentary_score?: Maybe<Scalars['Int']>;
  gameplay_score?: Maybe<Scalars['Int']>;
  overall_score?: Maybe<Scalars['Int']>;
  run_id?: Maybe<Scalars['Int']>;
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
  run?: Maybe<Runs_Obj_Rel_Insert_Input>;
  run_id?: Maybe<Scalars['Int']>;
  summary_comment?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
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

/** input type for updating data in table "scores" */
export type Scores_Set_Input = {
  commentary_comment?: Maybe<Scalars['String']>;
  commentary_score?: Maybe<Scalars['Int']>;
  gameplay_comment?: Maybe<Scalars['String']>;
  gameplay_score?: Maybe<Scalars['Int']>;
  overall_comment?: Maybe<Scalars['String']>;
  overall_score?: Maybe<Scalars['Int']>;
  rewatchable?: Maybe<Scalars['Boolean']>;
  run_id?: Maybe<Scalars['Int']>;
  summary_comment?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
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
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "runs" */
  runs: Array<Runs>;
  /** fetch aggregated fields from the table: "runs" */
  runs_aggregate: Runs_Aggregate;
  /** fetch data from the table: "runs" using primary key columns */
  runs_by_pk?: Maybe<Runs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


/** subscription root */
export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
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
export type Subscription_RootRuns_AggregateArgs = {
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
export type Subscription_RootUsers_AggregateArgs = {
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
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
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

export type GetAllRunsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetAllRunsSubscription = (
  { __typename?: 'subscription_root' }
  & { runs: Array<(
    { __typename?: 'runs' }
    & Pick<Runs, 'game' | 'category' | 'duration' | 'platform' | 'run_id' | 'runner'>
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
    subscription GetAllRuns {
  runs {
    game
    category
    duration
    platform
    run_id
    runner
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
 *   },
 * });
 */
export function useGetAllRunsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetAllRunsSubscription, GetAllRunsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetAllRunsSubscription, GetAllRunsSubscriptionVariables>(GetAllRunsDocument, baseOptions);
      }
export type GetAllRunsSubscriptionHookResult = ReturnType<typeof useGetAllRunsSubscription>;
export type GetAllRunsSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetAllRunsSubscription>;
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