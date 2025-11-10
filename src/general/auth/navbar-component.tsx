import logo from "@/assets/logo/logo.svg";

export default function NavbarComponent() {
  return (
    <div className="w-full fixed top-0">
      <nav className="max-w-[1200px] mx-auto p-5">
        <img src={logo} alt="4core-logo" />
      </nav>
    </div>
  );
}
