interface props {
  toggled: boolean;
  setToggle: () => void;
}
function ToggleBurger({ setToggle }: props) {
  return (
    <>
      <div
        className="cursor-pointer font-bold"
        onClick={() => {
          setToggle();
        }}
      >
        Toggle
      </div>
    </>
  );
}

export default ToggleBurger;
