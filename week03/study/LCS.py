#9251
# 완전탐색
# 첫번째 수열에서 만들 수 있는 모든 부분수열을 꺼낸다.
# [a], [a,c], [a,a] ....
# well-known 문제, 좋은 아이디어 있음! 


# 끝의 문자가 같다면, 하나씩 떼서 없애주고, +1을 해준다. 
# LCS(M,N) = LCS(M[:-1],N[:-1])+1

# 끝의 문자가 다르다면, 비교 후 정답에 영향을 미치지 않는 글자는 빼준다. 
a = list(str(input()))
b = list(str(input()))

dp = [[0 for _ in range(len(b)+1)]for _ in range(len(a)+1)]

for i in range(1,len(a) +1):
	for j in range(1,len(b) +1):
		if a[i-1] == b[j-1]:
			dp[i][j] = dp[i-1][j-1]+ 1
		else:
			dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			
# print(dp)
print(dp[len(a)][len(b)])
