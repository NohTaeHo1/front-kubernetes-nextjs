import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import countReducer from "@/app/components/counter/service/counter.slice";
import articleReducer from "@/app/components/article/service/article.slice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import userReducer from "@/app/components/user/service/user.slice";
import boardReducer from "@/app/components/board/service/board.slice";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const countPersistConfig = {
  key: "count",
  storage,
  whitelist: ["countState"],
};
const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};
const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userState"],
};
const boardPersistConfig = {
  key: "board",
  storage,
  whitelist: ["boardState"],
};

const persistedCountReducer = persistReducer(countPersistConfig, countReducer);
const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedBoardReducer = persistReducer(boardPersistConfig, boardReducer);

export const rootReducer = combineReducers({
  count: persistedCountReducer, // 키로 호출, 선형이 아닌 다이렉트로 찾음
  article: persistedArticleReducer,
  user: persistedUserReducer,
  board: persistedBoardReducer,
});
