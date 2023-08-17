import useSWR from "swr";
import Header from "@/components/Header";
import List from "@/components/List";
import { Component } from "react";

export default function HomePage({ coins }) {
  return (
    <div>
      <Header />
      <List coins={coins} />
    </div>
  );
}
