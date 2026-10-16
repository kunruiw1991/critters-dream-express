export const DIRS=[[0,-1],[1,0],[0,1],[-1,0]];
export const levels=[
 {name:'A little moonlit ride',subtitle:'Pick up LunaBat and take her to the picnic.',path:[[0,2],[1,2],[2,2],[2,1],[3,1],[4,1],[4,2],[5,2]],missing:[1,2,5],friends:{3:'bat'},rocks:[[0,0],[5,0],[0,4],[4,4]]},
 {name:'A lantern for the journey',subtitle:'LunaBat and SunnyFox are waiting for a lift.',path:[[0,3],[1,3],[1,2],[1,1],[2,1],[3,1],[3,2],[3,3],[4,3],[5,3]],missing:[1,3,4,6,8],friends:{2:'bat',7:'fox'},rocks:[[0,0],[4,0],[5,1],[2,4]]},
 {name:'Everyone to the picnic!',subtitle:'Bring SunnyFox and PoppyDash to the moonlit picnic.',path:[[0,2],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[4,1],[4,2],[5,2]],missing:[1,3,4,5,7,8],friends:{2:'fox',6:'skunk'},rocks:[[0,0],[2,1],[5,0],[4,4]]}
];
export const key=([x,y])=>`${x},${y}`;
export function direction(a,b){return DIRS.findIndex(d=>a[0]+d[0]===b[0]&&a[1]+d[1]===b[1]);}
export function solution(l){return Object.fromEntries(l.path.map((p,i)=>[key(p),i===0?[1,3]:i===l.path.length-1?[1,3]:[direction(p,l.path[i-1]),direction(p,l.path[i+1])]]));}
export function initial(l){const s=solution(l);return Object.fromEntries(Object.entries(s).filter(([k])=>!l.missing.some(i=>key(l.path[i])===k)));}
export function trace(l,board){let p=l.path[0],incoming=3,route=[p],seen=new Set(),picked=[];for(let step=0;step<100;step++){
 const k=key(p),piece=board[k];if(!piece||!piece.includes(incoming))return {route,picked,win:false,reason:'gap'};
 if(seen.has(k))return {route,picked,win:false,reason:'loop'};seen.add(k);
 const fi=l.path.findIndex(q=>key(q)===k);if(l.friends[fi])picked.push(l.friends[fi]);
 if(k===key(l.path.at(-1)))return {route,picked,win:picked.length===Object.keys(l.friends).length,reason:'friends'};
 const out=piece.find(d=>d!==incoming),d=DIRS[out];p=[p[0]+d[0],p[1]+d[1]];if(p[0]<0||p[0]>5||p[1]<0||p[1]>4)return {route,picked,win:false,reason:'edge'};route.push(p);incoming=(out+2)%4;
 }return {route,picked,win:false,reason:'loop'};}
