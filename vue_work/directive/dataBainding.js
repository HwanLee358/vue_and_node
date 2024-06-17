const template = /*html*/`
    <!-- v-text, v-html 태그내용 -->
    <div>{{htmlString}}</div>
    <div v-text="htmlString"></div>
    <div v-html="htmlString"></div>
    <input type="text" v-model.lazy="memInfo.valueModel" class="form-control mb-3">
    <input type="number" v-model.number="memInfo.score" class="form-control mb-3">
    <textarea v-text="memInfo.memo" class="form-control mb-3"></textarea>
    <select v-model="memInfo.city" class="form-control mb-3">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
    </select>
    <div class="form-check">
        <label class="form-check-label">서울
        <input type="checkbox" value="02" class="form-check-input" v-model="memInfo.mainYn">
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">부산
        <input type="checkbox" value="21" class="form-check-input" v-model="memInfo.mainYn">
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">제주
        <input type="checkbox" value="064" class="form-check-input"v-model="memInfo.mainYn">
        </label>
    </div>


    <div class="form-check">
        <label class="form-check-label">서울
        <input type="radio" value="02" class="form-check-input" v-model="memInfo.picked">
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">부산
        <input type="radio" value="21" class="form-check-input" v-model="memInfo.picked">
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">제주
        <input type="radio" value="064" class="form-check-input"v-model="memInfo.picked">
        </label>
    </div>
    <button class="btn btn-primary" v-bind:disabled="memInfo.valueModel==''">등록</button>
    <!-- v-bind 태그 속성 바인딩 -->
    <img v-bind:src="memInfo.profile" style="width:200px">
    <!-- 클래스 바인딩 -->
    <div class="container mb-3" v-bind:class="{'active' : isActive, 'text-red' : hasError}">클래스 바인딩</div>
    <div class="container mb-3" v-bind:class="[activeClass,errorClass]">클래스 바인딩</div>   
    <div class="container mb-3" v-bind:class="styleObject">인라인 스타일 바인딩</div>   
    <p>{{memInfo}}</p>
`;
export default{
    template,
    data(){ return {htmlString: /*html*/`<p style="color:red;">This is a red string.</p>`,
                    memInfo: {
                        valueModel: 'south korea',
                        score: 100,
                        memo : '메모작성',
                        city : "21",
                        mainYn : ["02","21"],
                        picked : "02",
                        profile: "리모라운드넥니트.gif"
                    },
                    isActive : true,
                    hasError : true,
                    activeClass : 'active',
                    errorClass : 'text-red',
                    styleObject : {color: 'red', fontSize: '13px'}
                    
    }},
    method : {}
}