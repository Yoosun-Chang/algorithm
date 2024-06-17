/*
지식이는 게임을 만드는 것을 좋아합니다. 하지만 매번 다른 크기의 지도와 장애물을 배치하는데 불편함을 겪고 있습니다. 이런 불편함을 해결하기 위해 지도의 크기와 장애물의 위치, 캐릭터의 위치만 입력하면 게임 지형을 완성해 주는 프로그램을 만들고 싶습니다.  지식이를 위해 게임 지형을 만드는 프로그램을 작성해 주세요.

- 가로(n), 세로(m)의 크기가 주어집니다.
- 지형의 테두리는 벽으로 이루어져 있습니다.
- 캐릭터가 있는 좌표가 배열 형태로 주어집니다.
- 장애물이 있는 좌표가 2차원 배열 형태로 주어집니다.

지도는 n x m 크기의 배열이며 배열 안의 값은
   -움직일 수 있는 공간(0)
   -캐릭터(1)
   -벽(2)
3개로 구분되어 있습니다.
*/

function make_map(n, m, char, obj){
    //지도 초기화하기
    //각 지도 가로/세로 두칸 외벽을 포함한 크기만큼 추가하기(각 끝 한칸씩)
    let world_map = [];
    for(let i=0; i<m+2; i++){
      world_map.push(Array(n+2).fill(0));
    }
  
    //지도 외벽 그리기
    for(let i in world_map){
      for(let j in world_map[0]){
        if (i==0 || j==world_map[0].length-1 || j==0 || i==world_map.length-1) {
          world_map[i][j] = 2;
        }
      }
    }
  
    //지도에 캐릭터 추가하기/ 외벽으로 인해 좌표에 +1을 해줍니다.
    world_map[char[0]+1][char[1]+1] = 1;
    //지도에 장애물 추가하기
    for (let i of obj){
      if (world_map[i[0]+1][i[1]+1] != 1){
        world_map[i[0]+1][i[1]+1] = 2;
      } else {
        world_map[i[0]+1][i[1]+1] = 1;
      }
    }
    //장애물을 추가하려는 자리에 캐릭터가 있을 시 캐릭터는 그대로둔다
    //마찬가지 외벽으로 인한 좌표 조정을 해준다.
    for(let i of world_map) {
      console.log(i);
    }
  }
  
  make_map(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]]);