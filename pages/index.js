
import Header from "@/components/Header";
import List from "@/components/List";
import NavBar from "@/components/NavigationBar";

export default function HomePage({ coins }) {
  return (
    <div>
      <Header />
      <List coins={coins} />
      <NavBar />
    </div>
  );
}
