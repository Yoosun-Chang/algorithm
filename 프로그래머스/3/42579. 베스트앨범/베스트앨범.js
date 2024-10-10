function solution(genres, plays) {
    const genreMap = {};

    // 1. 장르별로 노래를 그룹화하고, 총 재생 횟수를 기록
    genres.forEach((genre, index) => {
        const play = plays[index];
        if (!genreMap[genre]) {
            genreMap[genre] = { totalPlays: 0, songs: [] };
        }
        genreMap[genre].totalPlays += play;
        genreMap[genre].songs.push({ index, play });
    });

    // 2. 장르를 총 재생 횟수 기준으로 정렬
    const sortedGenres = Object.keys(genreMap).sort(
        (a, b) => genreMap[b].totalPlays - genreMap[a].totalPlays
    );

    const bestAlbum = [];

    // 3. 각 장르별로 노래를 정렬하고, 최대 두 곡을 베스트 앨범에 추가
    for (const genre of sortedGenres) {
        const songs = genreMap[genre].songs;
        songs.sort((a, b) => b.play - a.play || a.index - b.index);
        bestAlbum.push(songs[0].index);
        if (songs[1]) {
            bestAlbum.push(songs[1].index);
        }
    }

    return bestAlbum;
}
