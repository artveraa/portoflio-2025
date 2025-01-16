const Profile = () => {
  return (
    <div className="px-5 py-20 grid grid-cols-1 md:grid-cols-2 gap-5 bg-main text-dark rounded-t-3xl sticky top-20 -z-10">
      <p className="text-lg md:text-2xl">Profile</p>
      <div className="flex flex-col items-start gap-9">
        <p className="font-instrument text-3xl md:text-5xl">
          Le développement front-end n&apos;est pas qu&apos;un simple métier,
          c&apos;est une manière de voir les choses. Il s&apos;agit de créer des
          expériences fluides et engageantes, en mêlant logique, esthétique et
          interaction.
        </p>
        <p className="text-lg md:text-xl">
          Au fil de ma carrière, j&apos;ai eu la chance de collaborer avec une
          variété de clients, dans des secteurs aussi divers que stimulants. Mon
          objectif reste inchangé : concevoir des interfaces qui ne sont pas
          seulement fonctionnelles, mais qui se distinguent par leur élégance et
          leur simplicité d&apos;utilisation.
        </p>
        <button>En savoir plus</button>
      </div>
    </div>
  );
};
export default Profile;
