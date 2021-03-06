const data = {
  velopert: {
    name: 'lsw',
    description: 'like god',
  },
  gildong: {
    name: 'hgd',
    description: 'thief',
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>Doesn't Exist User</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;