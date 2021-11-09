const Demo = {
    template: demoTemplate,
    data() {
        return {
            selected: {
                row: 1,
                col: 1,
            },
            basic: {},
            game: {},
            selectors: {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true},
            done: false,
        }
    },
    mounted() {
        // инициализация скрытой коллекции
        this.initBasicCollection();
        // console.log(this.basic)
        // инициализация (заполнение) игровой коллекции
        this.initGameCollection();
        // console.log(this.game)
        this.basicConstFill();
        // this.demoBasicFill();
        // console.log(this.basic[1][1].value)
        this.demoGameFill();
        // console.log(this.game[1][1].value)
        this.initStyle();
        this.game[1][1].value = "";
        // this.game[3][9].value = "";
        // this.game[9][4].value = "";
        this.allCheck();
    },
    methods: {
        initBasicCollection(){
            let collection = {};
            for (let i=1; i<=9; i++) {
                let object = {};
                for (let j=1; j<=9; j++) {
                    object[j] = 0;
                }
                collection[i] = object;
            }
            this.basic = collection;
        },
        initGameCollection(){
            let collection = {};
            for (let i=1; i<=9; i++) {
                let object = {};
                for (let j=1; j<=9; j++) {
                    object[j] = {
                        style: "",
                        class: "",
                        value: 0
                    }
                }
                collection[i] = object;
            }
            this.game = collection;
        },

        demoBasicFill(){
            for (let i=1; i<=9; i++){
                for (let j=1; j<=9; j++){
                    this.basic[i][j] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
                }
            }
        },
        demoGameFill(){
            for (let i=1; i<=9; i++){
                for (let j=1; j<=9; j++){
                    this.game[i][j].value = this.basic[i][j];
                }
            }
        },
        demoGameClassClear(){
            for (let i=1; i<=9; i++){
                for (let j=1; j<=9; j++){
                    this.game[i][j].class = "";
                }
            }
        },
        setNum(n){
            this.game[this.selected.row][this.selected.col].value=n;
            this.pickCol(this.selected.row, this.selected.col);
        },
        allCheck(){
            let sum = {
                all: 0,
            };
            for (let i=1; i<=9; i++){
                for (let j=1; j<=9; j++){
                    if (this.game[i][j].value!==""){
                        if(this.game[i][j].value!==this.basic[i][j]){
                            this.game[i][j].class="table-danger";
                        } else {
                            sum.all++;
                            if (sum[this.game[i][j].value]===undefined) {
                                sum[this.game[i][j].value]=1
                            }else{
                                sum[this.game[i][j].value]++;
                            }
                        }
                    }
                }
            }
            if (sum.all===81) {
                this.done = true;
                console.log("DONE!!!")
                alert("СУДОКУ СОБРАНО!!!")
            }
            // for (let i=1; i<=9; i++) {
            //     if (sum[i]===9) {
            //         this.selectors[i] = false;
            //     }
            // }
        },
        pickCol(row, col){
            this.selected.row=row;
            this.selected.col=col;

            // убрать подсветку на всём поле
            this.demoGameClassClear();

            // подсветить колонку
            // подсветить строку
            for (let i=1; i<=9; i++){
                this.game[i][this.selected.col].class="table-secondary";
                this.game[this.selected.row][i].class="table-secondary";
            }
            // подсветить квадрат

            // подсветить те же цифры на поле
            for (let i=1; i<=9; i++){
                for (let j=1; j<=9; j++){
                    if(this.game[i][j].value===this.game[this.selected.row][this.selected.col].value){
                        this.game[i][j].class="table-success";
                    }
                }
            }
            // подсветить выделенный
            this.game[this.selected.row][this.selected.col].class="table-primary";
            // проверить все поля
            this.allCheck();
        },
        basicConstFill(){
            let arr = [
                1,2,3,4,5,6,7,8,9, 4,5,6,7,8,9,1,2,3, 7,8,9,1,2,3,4,5,6,
                2,3,4,5,6,7,8,9,1, 5,6,7,8,9,1,2,3,4, 8,9,1,2,3,4,5,6,7,
                3,4,5,6,7,8,9,1,2, 6,7,8,9,1,2,3,4,5, 9,1,2,3,4,5,6,7,8,
            ];
            for (let i=1; i<=9; i++){
                for (let j=1; j<=9; j++){
                    this.basic[i][j] = arr[0];
                    arr.splice(0,1);
                }
            }
        },
        initStyle(){
            this.game[1][3].style="border-right: 1px solid;"
            this.game[1][6].style="border-right: 1px solid;"

            this.game[2][3].style="border-right: 1px solid;"
            this.game[2][6].style="border-right: 1px solid;"

            this.game[3][1].style="border-bottom: 1px solid;"
            this.game[3][2].style="border-bottom: 1px solid;"
            this.game[3][3].style="border-right: 1px solid; border-bottom: 1px solid;"
            this.game[3][4].style="border-bottom: 1px solid;"
            this.game[3][5].style="border-bottom: 1px solid;"
            this.game[3][6].style="border-right: 1px solid; border-bottom: 1px solid;"
            this.game[3][7].style="border-bottom: 1px solid;"
            this.game[3][8].style="border-bottom: 1px solid;"
            this.game[3][9].style="border-bottom: 1px solid;"

            this.game[4][3].style="border-right: 1px solid;"
            this.game[4][6].style="border-right: 1px solid;"

            this.game[5][3].style="border-right: 1px solid;"
            this.game[5][6].style="border-right: 1px solid;"

            this.game[6][1].style="border-bottom: 1px solid;"
            this.game[6][2].style="border-bottom: 1px solid;"
            this.game[6][3].style="border-right: 1px solid; border-bottom: 1px solid;"
            this.game[6][4].style="border-bottom: 1px solid;"
            this.game[6][5].style="border-bottom: 1px solid;"
            this.game[6][6].style="border-right: 1px solid; border-bottom: 1px solid;"
            this.game[6][7].style="border-bottom: 1px solid;"
            this.game[6][8].style="border-bottom: 1px solid;"
            this.game[6][9].style="border-bottom: 1px solid;"

            this.game[7][3].style="border-right: 1px solid;"
            this.game[7][6].style="border-right: 1px solid;"

            this.game[8][3].style="border-right: 1px solid;"
            this.game[8][6].style="border-right: 1px solid;"

            this.game[9][3].style="border-right: 1px solid;"
            this.game[9][6].style="border-right: 1px solid;"
        },
    },
}