// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User, Group, Meeting } from "../../prisma/generated/prisma-client";
import { Context } from "../types/types";

export type regionType =
  | "Minskaya"
  | "Brestskaya"
  | "Gomelskaya"
  | "Mogilevskaya"
  | "Grodnenskaya"
  | "Vitebskaya";
export type Weekday = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";
export type meetingType = "Open" | "Closed";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsGroup {
    id: string;
  }

  export interface ArgsGroupByName {
    name?: string | null;
  }

  export interface ArgsMeeting {
    id: string;
  }

  export type UserResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export type GroupResolver =
    | ((
        parent: undefined,
        args: ArgsGroup,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Group | null | Promise<Group | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsGroup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group | null | Promise<Group | null>;
      };

  export type GroupByNameResolver =
    | ((
        parent: undefined,
        args: ArgsGroupByName,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Group | null | Promise<Group | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsGroupByName,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group | null | Promise<Group | null>;
      };

  export type GroupsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Group[] | null | Promise<Group[] | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group[] | null | Promise<Group[] | null>;
      };

  export type MeetingResolver =
    | ((
        parent: undefined,
        args: ArgsMeeting,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Meeting | null | Promise<Meeting | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsMeeting,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Meeting | null | Promise<Meeting | null>;
      };

  export type MeetingsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Meeting[] | null | Promise<Meeting[] | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Meeting[] | null | Promise<Meeting[] | null>;
      };

  export interface Type {
    user:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };

    group:
      | ((
          parent: undefined,
          args: ArgsGroup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group | null | Promise<Group | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsGroup,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Group | null | Promise<Group | null>;
        };

    groupByName:
      | ((
          parent: undefined,
          args: ArgsGroupByName,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group | null | Promise<Group | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsGroupByName,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Group | null | Promise<Group | null>;
        };

    groups:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group[] | null | Promise<Group[] | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Group[] | null | Promise<Group[] | null>;
        };

    meeting:
      | ((
          parent: undefined,
          args: ArgsMeeting,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Meeting | null | Promise<Meeting | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsMeeting,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Meeting | null | Promise<Meeting | null>;
        };

    meetings:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Meeting[] | null | Promise<Meeting[] | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Meeting[] | null | Promise<Meeting[] | null>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name,
    email: (parent: User) => parent.email,
    password: (parent: User) => parent.password
  };

  export type IdResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type EmailResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type PasswordResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type GroupsResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Group[] | null | Promise<Group[] | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group[] | null | Promise<Group[] | null>;
      };

  export interface Type {
    id:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    email:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    password:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    groups:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group[] | null | Promise<Group[] | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Group[] | null | Promise<Group[] | null>;
        };
  }
}

export namespace GroupResolvers {
  export const defaultResolvers = {
    id: (parent: Group) => parent.id,
    name: (parent: Group) => parent.name,
    description: (parent: Group) => parent.description,
    city: (parent: Group) => parent.city,
    region: (parent: Group) => parent.region,
    phone: (parent: Group) =>
      parent.phone === undefined ? null : parent.phone,
    email: (parent: Group) =>
      parent.email === undefined ? null : parent.email,
    address: (parent: Group) =>
      parent.address === undefined ? null : parent.address,
    lattitude: (parent: Group) =>
      parent.lattitude === undefined ? null : parent.lattitude,
    longitude: (parent: Group) =>
      parent.longitude === undefined ? null : parent.longitude
  };

  export type IdResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type AuthorResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | Promise<User>;
      };

  export type NameResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type DescriptionResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type CityResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type RegionResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => regionType | Promise<regionType>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => regionType | Promise<regionType>;
      };

  export type PhoneResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type EmailResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type AddressResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type LattitudeResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => number | null | Promise<number | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | null | Promise<number | null>;
      };

  export type LongitudeResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => number | null | Promise<number | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | null | Promise<number | null>;
      };

  export type MeetingsResolver =
    | ((
        parent: Group,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Meeting[] | null | Promise<Meeting[] | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Meeting[] | null | Promise<Meeting[] | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    author:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | Promise<User>;
        };

    name:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    description:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    city:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    region:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => regionType | Promise<regionType>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => regionType | Promise<regionType>;
        };

    phone:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    email:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    address:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    lattitude:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | null | Promise<number | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => number | null | Promise<number | null>;
        };

    longitude:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | null | Promise<number | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => number | null | Promise<number | null>;
        };

    meetings:
      | ((
          parent: Group,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Meeting[] | null | Promise<Meeting[] | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Meeting[] | null | Promise<Meeting[] | null>;
        };
  }
}

export namespace MeetingResolvers {
  export const defaultResolvers = {
    id: (parent: Meeting) => parent.id,
    name: (parent: Meeting) => parent.name,
    weekday: (parent: Meeting) => parent.weekday,
    time: (parent: Meeting) => parent.time,
    type: (parent: Meeting) => (parent.type === undefined ? null : parent.type)
  };

  export type IdResolver =
    | ((
        parent: Meeting,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type GroupResolver =
    | ((
        parent: Meeting,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Group | Promise<Group>)
    | {
        fragment: string;
        resolve: (
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group | Promise<Group>;
      };

  export type NameResolver =
    | ((
        parent: Meeting,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type WeekdayResolver =
    | ((
        parent: Meeting,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Weekday | Promise<Weekday>)
    | {
        fragment: string;
        resolve: (
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Weekday | Promise<Weekday>;
      };

  export type TimeResolver =
    | ((
        parent: Meeting,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type TypeResolver =
    | ((
        parent: Meeting,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => meetingType | null | Promise<meetingType | null>)
    | {
        fragment: string;
        resolve: (
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => meetingType | null | Promise<meetingType | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Meeting,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    group:
      | ((
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Group | Promise<Group>)
      | {
          fragment: string;
          resolve: (
            parent: Meeting,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Group | Promise<Group>;
        };

    name:
      | ((
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Meeting,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    weekday:
      | ((
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Weekday | Promise<Weekday>)
      | {
          fragment: string;
          resolve: (
            parent: Meeting,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Weekday | Promise<Weekday>;
        };

    time:
      | ((
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Meeting,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    type:
      | ((
          parent: Meeting,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => meetingType | null | Promise<meetingType | null>)
      | {
          fragment: string;
          resolve: (
            parent: Meeting,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => meetingType | null | Promise<meetingType | null>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Group: GroupResolvers.Type;
  Meeting: MeetingResolvers.Type;
}

// @ts-ignore
declare module "graphql-tools" {
  interface IResolvers extends Resolvers {}
}
