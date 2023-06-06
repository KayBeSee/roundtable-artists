const axios = require("axios");

const SPOTIFY_TOKEN =
  "BQA6trGY9aA4XZ611UYZBjg6ORJZVG0ux7cXI_FShscYIOFkdLjYYSMvVgqO4V5Jkl45Nm44v9FlTGqpYz3wCtz64DC2QVDHFcgNqjrj1GnS87Jrg5y2gLgnV7eQWgEQwnnk-r743gl1rTU4a5SnXH10LEVSSgjaZilmN70oRyFKUO0Kfyj-JDE";

const main = async () => {
  const identifier = process.argv[2];
  const url = `https://api.spotify.com/v1/artists/${identifier}/top-tracks?market=US`;
  console.log("url: ", url);
  const { data } = await axios(url, {
    headers: {
      Authorization: `Bearer ${SPOTIFY_TOKEN}`,
    },
  });

  const formatted = data.tracks
    .splice(0, 5)
    // @ts-ignore
    .map((track) => ({ name: track.name, url: track.preview_url }));

  console.log("tracks: ", formatted);

  //   const album = {
  //     name: data.name,
  //     slug: data.name.replace(/\s+/g, "-").toLowerCase(), // https://stackoverflow.com/a/1983661/3212591
  //     year: new Date(data.release_date).getFullYear(),
  //     type: data.album_type,
  //     albumCoverUrl: "/albums/xxx.jpg",
  //     description: ``,
  //     otherImages: [],
  //     streamingLinks: {
  //       spotify: data.external_urls.spotify,
  //       apple: "",
  //       amazon: "",
  //       youtube: "",
  //     },
  //     pageStyle: {
  //       streamServiceColor: "fill-[]",
  //       albumCoverBorderColor: "bg-[]",
  //       backgroundColor: "bg-[]",
  //       primaryText: "text-[]",
  //       secondaryText: "text-[]",
  //       listenNowBorder: "border-[]",
  //     },
  //     trackList: data.tracks.items.map((track) => {
  //       return {
  //         name: track.name,
  //         url: track.preview_url,
  //       };
  //     }),
  //   };

  //   console.log(album);
};

main();
