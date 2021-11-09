let demoTemplate = `
<div class="container align-middle">
    <div class="row">
        <div class="col-12">
            <table class="table table-bordered text-center">
                <tbody id="tbody">
                    <tr v-for="(row, rowID) in game">
                        <td @click="pickCol(rowID, colID)" v-for="(col, colID) in row" :class="col.class" :style="col.style">{{col.value}}</td>
                    </tr>
                </tbody>
            </table>
        </div>    
    </div>
    <div class="row">
        <div class="col-12">
            <table class="table table-bordered text-center">
                <tbody id="tbody">
                    <tr><td v-for="n in 9">
                        <span @click="setNum(n)">{{n}}</span>
                    </td></tr>
                </tbody>
            </table>
        </div>    
    </div>    
</div>
`;