import sys
input=sys.stdin.readline
sys.setrecursionlimit(10**9)

#root 에서 i-start 는 inorder 에서 preorder 와 같은 값을 가지기 위해 이동한 범위이고
#이후 +1 을 하면 오른쪽 서브트리의 시작점이 된다

def Postorder(root,start,end):

    for i in range(start,end):
        if inorder[i]==preorder[root]:
            Postorder(root+1 ,start, i) # inorder의 왼쪽 부분
            Postorder(root+1+(i-start) , i+1 , end) #inorder의 오른쪽 부분
            answer.append(preorder[root])

for i in range(int(input())):

    N=int(input())
    preorder=list(map(int,input().split()))
    inorder=list(map(int,input().split()))
    answer=[]
    Postorder(0,0,N)

    print(*answer)