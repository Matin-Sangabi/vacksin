import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="h-full min-h-screen bg-gradient-to-bl from-blue-100 from-20% via-blue-100 via-20% to-slate-100 to-90%">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
