const axios = require("axios");

const SPOTIFY_TOKEN =
  "BQBXi50e3KDbvylfC0Tdo_cYrdKOY-M1xUko3yM0LIFLbo7EXFWI4Vr9I1hgJT2ZPZAKerAfVGLRoaqqaFFnvcaZJDkMlyQQ6UxiNeEDi0QD4MIyYMW-sEjMBlUCWoeAw_ASG52hc56W-XLFAxCsFA8mGdahoHHdAEVs2HKUEF64eOKKLB1MNSjsuCpNn2L5WSvHmqbO4Inp8n57Ambk8HCE8LLyHZ4iwnpLQgLJ0fucHbt9aWxfl43Zaa0Ne26hZ4PqZ2lxtiaJqR5UV0_As-LIdY94t10EJNb4uOIgx766EsKsb5Q8LWZ-EX--KZPkzACmdMll5_49szAPlrj2tTzlix4";

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
