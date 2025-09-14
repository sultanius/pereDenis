<template>
    <div class="calculator-container">
        <!-- Выбор типа калькулятора -->
        <div class="calculator-type-selector">
            <button
                :class="['calc-type-btn', { active: activeCalc === 'architecture' }]"
                @click="setActiveCalc('architecture')"
            >
                Стоимость архитектурного проекта
            </button>
            <button
                :class="['calc-type-btn', { active: activeCalc === 'interior' }]"
                @click="setActiveCalc('interior')"
            >
                Стоимость дизайна интерьера
            </button>
        </div>

        <!-- Чекбоксы для архитектурного проекта -->
        <div v-if="activeCalc === 'architecture'" class="calc-options">
            <h3>Выберите услуги:</h3>
            <div class="calc-price-points-box">
                <label v-for="option in architectureOptions" :key="option.id">
                    <input
                        type="checkbox"
                        v-model="selectedArchitecture"
                        :value="option.id"
                        @change="calculateTotal"
                    >
                    <span>{{ option.name }} ({{ option.price }} руб/м²)</span>
                </label>
            </div>
        </div>

        <!-- Чекбоксы для дизайна интерьера -->
        <div v-if="activeCalc === 'interior'" class="calc-options">
            <h3>Выберите услуги:</h3>
            <div class="calc-price-points-box">
                <label v-for="option in interiorOptions" :key="option.id">
                    <input
                        type="checkbox"
                        v-model="selectedInterior"
                        :value="option.id"
                        @change="calculateTotal"
                    >
                    <span>{{ option.name }} ({{ option.price }} руб/м²)</span>
                </label>
            </div>
        </div>

        <!-- Ползунок для площади -->
        <div class="area-slider">
            <label for="area-range">Площадь (м²): {{ area }}</label>
            <input
                type="range"
                id="area-range"
                v-model="area"
                min="10"
                max="1000"
                step="5"
                @input="calculateTotal"
            >
            <div class="slider-values">
                <span>10 м²</span>
                <span>1000 м²</span>
            </div>
        </div>

        <!-- Итоговая стоимость -->
        <div class="total-cost">
            <h2>Общая стоимость: {{ totalCost.toLocaleString() }} руб</h2>
        </div>
    </div>
</template>

<script>
import FillBtn from '../../components/ui/FillBtn.vue'

export default {
    components: {
        FillBtn
    },
    data() {
        return {
            activeCalc: 'architecture',
            area: 100,
            selectedArchitecture: [],
            selectedInterior: [],
            totalCost: 0,
            architectureOptions: [
                { id: 1, name: 'Эскизный проект', price: 1800 },
                { id: 2, name: 'Рабочий проект АР', price: 1111 },
                { id: 3, name: 'Конструктивный раздел КЖ', price: 111 },
                { id: 4, name: 'Инженерия ВК и ОВ', price: 1111 },
            ],
            interiorOptions: [
                { id: 1, name: 'Эскизный проект', price: 1800 },
                { id: 2, name: 'Рабочий проект РП', price: 1111 },
            ]
        }
    },
    methods: {
        setActiveCalc(type) {
            this.activeCalc = type;
            this.calculateTotal();
        },
        calculateTotal() {
            let pricePerSqm = 0;

            if (this.activeCalc === 'architecture') {
                this.selectedArchitecture.forEach(optionId => {
                    const option = this.architectureOptions.find(opt => opt.id === optionId);
                    if (option) {
                        pricePerSqm += option.price;
                    }
                });
            } else {
                this.selectedInterior.forEach(optionId => {
                    const option = this.interiorOptions.find(opt => opt.id === optionId);
                    if (option) {
                        pricePerSqm += option.price;
                    }
                });
            }

            this.totalCost = pricePerSqm * this.area;
        }
    },
    mounted() {
        this.calculateTotal();
    }
}
</script>

<style>
.calculator-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.calculator-type-selector {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

.calc-type-btn {
    flex: 1;
    padding: 12px 20px;
    border: 2px solid #ddd;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.calc-type-btn.active {
    background: #1A1A1A;
    color: white;
    border-color: #1A1A1A;
}

.calc-type-btn:hover {
    border-color: rgba(44, 21, 21, 0.99);;
}

.calc-options {
    margin-bottom: 30px;
}

.calc-options h3 {
    margin-bottom: 15px;
    color: #333;
}

.calc-price-points-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
}

.calc-price-points-box label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    transition: background-color 0.2s ease;
}

.calc-price-points-box label:hover {
    background-color: #f8f9fa;
}

.calc-price-points-box input[type="checkbox"] {
    width: 18px;
    height: 18px;
}

.area-slider {
    margin: 30px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
}

.area-slider label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
}

.area-slider input[type="range"] {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
    outline: none;
    margin: 10px 0;
}

.slider-values {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
}

.total-cost {
    text-align: center;
    padding: 20px;
    background: #1A1A1A;
    border-radius: 8px;
    border: 2px solid rgba(26, 26, 26, 0.89);
}

.total-cost h2 {
    color: white;
    margin: 0;
}
</style>
