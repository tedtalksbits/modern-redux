import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://arsenal-players-api.herokuapp.com";

interface player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  birthdate: string;
  nationality: string;
  shirt_number: number;
  player_image: string;
  on_loan: boolean;
  first_team: boolean;
  flag: string;
  loan_team: string | null;
}

// api slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints(builder) {
    return {
      fetchPlayers: builder.query<player[], string | void>({
        query(playerId = "") {
          return `/players/${playerId}`;
        },
      }),
    };
  },
});

export const { useFetchPlayersQuery } = apiSlice;
