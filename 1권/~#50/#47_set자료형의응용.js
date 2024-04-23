const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
};

const uniquePeople = new Set(Object.values(people)); // 중복된 값을 제거하여 Set 생성
console.log('uniquePeople size: ', uniquePeople.size);
