CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
  _new record;
begin
  _new := new;
  _new. "updated_at" = now();
  return _new;
end;
$$;
CREATE TABLE public.runs (
    game text NOT NULL,
    category text NOT NULL,
    runner text NOT NULL,
    duration interval NOT NULL,
    run_id integer NOT NULL,
    platform text
);
CREATE SEQUENCE public.runs_run_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.runs_run_id_seq OWNED BY public.runs.run_id;
CREATE TABLE public.scores (
    commentary_score integer NOT NULL,
    commentary_comment text NOT NULL,
    gameplay_score integer NOT NULL,
    gameplay_comment text NOT NULL,
    overall_score integer NOT NULL,
    overall_comment text NOT NULL,
    rewatchable boolean NOT NULL,
    summary_comment text NOT NULL,
    run_id integer NOT NULL,
    user_id uuid NOT NULL
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    display_name text,
    avatar_url text
);
CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE ONLY public.runs ALTER COLUMN run_id SET DEFAULT nextval('public.runs_run_id_seq'::regclass);
ALTER TABLE ONLY public.runs
    ADD CONSTRAINT runs_pkey PRIMARY KEY (run_id);
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_pkey PRIMARY KEY (user_id, run_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_run_id_fkey FOREIGN KEY (run_id) REFERENCES public.runs(run_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
