#4796_캠핑
#캠핑장을 연속하는 P일 중, L일동안만 사용할 수 있다. 
#강산이는 이제 막 V일짜리 휴가를 시작했다. 
#강산이가 캠핑장을 최대 며칠동안 사용할 수 있을까? (1 < L < P < V)

# 캠핑장을 연속하는 8일 중 5일 동안만 사용할 수 있다.
# 이제 막 20일짜리 휴가를 시작했다
# 최대 14일 이용 가능

i = 0
while True:
    i+=1
    l, p, v = map(int, input().split())
    if l==0 and p==0 and v==0:
        break
    a = v//p
    b = v%p
    if l<b:
        b = l
    print("Case %d: %d" %(i, a*l+b))
    
