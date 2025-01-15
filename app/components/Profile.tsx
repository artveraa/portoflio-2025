const Profile = () => {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 ">
      <p className="text-2xl">Profile</p>
      <div className="flex flex-col items-start gap-7">
        <p className="font-instrument text-5xl">
          Le développement front-end n'est pas qu'un simple métier, c'est une
          manière de voir les choses. Il s'agit de créer des expériences fluides
          et engageantes, en mêlant logique, esthétique et interaction.
        </p>
        <p className="text-xl">
          Au fil de ma carrière, j'ai eu la chance de collaborer avec une
          variété de clients, dans des secteurs aussi divers que stimulants. Mon
          objectif reste inchangé : concevoir des interfaces qui ne sont pas
          seulement fonctionnelles, mais qui se distinguent par leur élégance et
          leur simplicité d'utilisation.
        </p>
        <button>En savoir plus</button>
      </div>
    </div>
  );
};
export default Profile;
