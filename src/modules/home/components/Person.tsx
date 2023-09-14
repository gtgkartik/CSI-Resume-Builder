import Image from 'next/image';
//
const persons = [
  {
    name: 'Kartik Kumar',
    role: 'React JS Developer',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocJL-_J7Y-G6DaEr3Tn6qAcNxKTi1blheoOXzArZzfYXPqg=s360-c-no',
    github: 'https://github.com/kartikkumar999',
    linkedin: 'https://www.linkedin.com/in/thisiskartik/',
    Instagram: 'https://www.instagram.com/thisiskartik._/',
  },
  {
    name: 'Akshay Allenki',
    role: 'React JS Developer',
    avatar: 'https://avatars.githubusercontent.com/u/111362177?v=4',
    github: 'https://github.com/allenkiakshay',
    linkedin: '',
    Instagram: '',
  },
  {
    name: 'Sai Charan Venna',
    role: 'UI/UX Developer',
    avatar: 'https://avatars.githubusercontent.com/u/89190019?v=4',
    github: 'https://github.com/charan7105',
    linkedin: 'https://www.linkedin.com/in/saicharanvenna/',
    Instagram: 'https://www.instagram.com/charan_.here/',
  },
  {
    name: 'H.V Mallesh',
    role: 'UI/UX Developer',
    avatar: 'https://avatars.githubusercontent.com/u/90507610?v=4',
    github: 'https://github.com/MALLESH18',
    linkedin: 'https://www.linkedin.com/in/mallesh-hv-9a8702239/',
    Instagram: 'https://www.instagram.com/mallesh._.hanumanthu',
  },
];

const PersonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="transition ease-in-out delay-100 duration-300 px-6 py-8 flex flex-col items-center text-center shadow hover:shadow-xl rounded-xl border-2 border-resume-50 hover:border-resume-100">
    {children}
  </div>
);

const ProfileSocial = ({
  github,
  linkedin,
  Instagram,
}: {
  github: string;
  linkedin: string;
  Instagram: string;
}) => (
  <div className="flex gap-4 items-center">
    <a href={github} target="_blank" rel="noreferrer">
      <Image src="/icons/github.svg" alt="github" width="24" height="24" />
    </a>
    <a href={linkedin} target="_blank" rel="noreferrer">
      <Image src="/icons/linkedin.svg" alt="linkedin" width="24" height="24" />
    </a>
    <a href={Instagram} target="_blank" rel="noreferrer" className="">
      <Image src="/icons/instagram.svg" alt="linkedin" width="28" height="28" />
    </a>
  </div>
);

export default function Person() {
  return (
    <>
      {persons.map((person) => (
        <PersonCard key={person.name}>
          <Image
            src={person.avatar}
            alt={person.name}
            className="rounded-full"
            height="96"
            width="96"
          />
          <p className="text-resume-800 mt-4 font-bold">{person.name}</p>
          <p className="text-resume-400 mb-6">{person.role}</p>
          <ProfileSocial
            github={person.github}
            linkedin={person.linkedin}
            Instagram={person.Instagram}
          />
        </PersonCard>
      ))}
    </>
  );
}
