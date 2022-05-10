import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  return (
    <>
      <>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </>
      <>
        <>
          <b>name : </b> {name}
        </>
        <>
          <b>nickname : </b>
          {nickname}
        </>
      </>
    </>

  )
};

export default Info;