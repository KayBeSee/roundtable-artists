const axios = require("axios");

const SPOTIFY_TOKEN =
  "BQBdZcqh-pi-NDL-qOGWvUpfBJHQj9u6uCev8pJIkZvJ4I-E7PEqXdvINidiSr2JC7Ha78x4uJP6lOd1xWCY1zJrYYBARlj-JTy9Q6Wu5uKnEH-yqeZtufnQ-X4Sd3CvbU1Q7Ukt-G912WxjySph-QOsbUOE0feKlA3u_rFvSHdDDgmYu2gvlyl_I5oefy84HtqJn9NOLaHJeoRIh_yjRTFo-WKAAPQF3U_4V-eb292ZuwYEfG0Mn4T_XxnXr9pk8rGju6-9FOcexnKtbayWcGoa9B8HBdX_ttusY1UqwrD9FXMW8CZETGAJbzB2D5BvVWRyzshy_lzM5kls6VY-BGp1BXs";

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
    .map((track: any) => ({ name: track.name, url: track.preview_url }));

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
