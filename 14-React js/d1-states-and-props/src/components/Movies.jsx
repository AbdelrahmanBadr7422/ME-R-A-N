import { useState } from "react";
import Movie from "./movie";
import '../styles/movies.css'

const Movies = () => {
  let [movieData] = useState([
    {
      title: "Mission: Impossible - Dead Reckoning",
      description:
        "With time running out and enemies at every turn, Ethan Hunt and his IMF team race to prevent a rogue artificial intelligence from taking over the world.",
        imageUrl:
          "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbtK2MfCqxPic8sleywm6uZtH9D4Tq0ZuYmoB66ycuA8bM-Lqp7ayyuV3poJOdgOLM9-AZKavqiClWam2YZ4jdoHBlJNY_sc1ns.jpg?r=080",
      },
    {
      title: "The Adam Project",
      description:
        "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.",
      imageUrl:
        "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeeIzAszOloF4Nk8KelxkCE6YKFSLJ7UG3NB2XgxqnOFDk8oSZVervVSNB305NJD73hHVjmfHRhN9Dt5Ea9oUxo-vH5ZKABN0Ko7u2fDVHpCBDBHEeLx1npmgEogE-280cJX.jpg?r=3db",
    },
    {
      title: "Teer Enta",
      description:
        "Too shy to dig up the courage to confront his crush, a clumsy vet is miraculously granted seven wishes by a genie that tries to help him win her heart.",
      imageUrl:
        "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWqpNGRZ_iTANQ3uefsb3KaqI62jupNDC7AkAbY6TxbdTRHQVQVuVS16A7xqZz7tB-wQ0wenkx2pUdyWyuFTFWNTKmQZi6SRZKU.jpg?r=ad7",
    },
    {
      title: "The Karate Kid",
      description:
        "In China, Dre learns to defend himself against a bully under the guidance of an unassuming kung fu master in this remake of the 1984 classic.",
      imageUrl:
        "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeZiX-DA50XJIy2-TF9BiO3iFIH-K0a_uzgE3yL3R0pYaZpQ_oYRggA-yt0vCOYrVvZFeeT76vU7l5YUFG7lPQ_ePffosL1O-04.jpg?r=a75",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      description:
        "On his 11th birthday, Harry Potter learns that he's a powerful wizard with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry.",
      imageUrl:
        "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeoi2oImdkw8BmTib3Lj8Xt2F3iJKTlNh9qSZzroW2n0PqLtS6IS-xfi_WagcJ4dp6eoqpSzmzAsj1MRke79EP4tVNUw8lZ8siA.jpg?r=439",
    },
    {
      title: "Extraction 2",
      description:
        "Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster.",
      imageUrl:
        "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUxf8Oi6b-AfMTchGw1zexfCRExKjd14PmkhCXIovRIpH70VwEz4VkhB58vU0BcoJhZhzfYtNhlYVIsB50UyowN9BDl_0XCIOTsaoXLS3ORN1g8mR0cqo99LDjNB_WZQX8zI.jpg?r=a98",
    },
    {
      title: "Meg 2: The Trench",
      description:
        "In the ocean's darkest depths, researchers fight for survival against monstrous sea creatures and an equally predatory mining operation.",
      imageUrl:
        "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe-Wk6IZcHokHVuFkaeolgI3sqB_zuZRaFq3buiDzLGzw4aMWBM6i6rdtPGeGaTCJVMn9OKHBrjAJdnJJBHWKRwYmD4LyU-yqnE.jpg?r=cd5",
    },
    {
      title: "The Mummy",
      description:
        "A treasure-hunting soldier reawakens an ancient Egyptian princess who has waited for centuries to take revenge on a world that wronged her.",
      imageUrl:
        "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbl4-iDKoohAgxxgi4zVqK_xT-V4cjGtO5_fR-9kJtbCjA0qWquOFr3boG1ono3fjFGxnLd7nM8Qhy3hHRjXdTUBihs0-5AwUvo.jpg?r=eb7",
    },
  ]);
  return (
    <>
      <div className="container">
        {movieData.map((movie) => (
          <Movie {...movie}></Movie>
        ))}
      </div>
    </>
  );
};

export default Movies;
