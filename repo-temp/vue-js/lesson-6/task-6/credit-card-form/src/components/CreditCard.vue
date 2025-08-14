<template>
    <div class="container">
        <div class="card_number card">
            <label for="card_num">Card Number</label>
            <input autocomplete="off" id="card_num" type="text" placeholder="0000 0000 0000 0000"
  maxlength="19"
            v-model="localCardNum">
        </div>
        <div class="card_expiration card">
            <label for="expiry_date">Expiry Date</label>
            <input autocomplete="off" id="expiry_date" type="text" placeholder="MM / YY"
            maxlength="7"
            v-model="localExpiryDate">
        </div>
        <div class="card_security card">
            <label for="secure_code">Secure Code</label>
            <input autocomplete="off" id="secure_code" type="text" placeholder="CVV"
            v-model="localSecureCode">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CreditCard',
        props: {
            cardNum: {
                type: String,
                required: true
            },
            expiryDate: {
                type: String,
                required: true
            },
            secureCode: {
                type: String,
                required: true
            },
            cardNumModifiers: {
                type: Object,
                default: () => ({})
            },
            expiryDateModifiers: {
                type: Object,
                default: () => ({})
            }
        },
        computed: {
            localCardNum: {
                get() {
                    if(this.cardNumModifiers.separate){
                        return this.getFormattedNumber(this.cardNum)
                    } 
                    else return this.cardNum
                },
                set(newVal) {
                    if(this.cardNumModifiers.separate){
                        newVal = newVal.replace(/\D/g, '').slice(0, 16)
                    }
                    this.$emit('update:cardNum', newVal)
                }
            },
            localExpiryDate: {
                get() {
                    return this.expiryDate
                },
                set(newVal) {
                    if(this.expiryDateModifiers.slash){
                        newVal = newVal.replace(/\D/g, '').slice(0, 4)
                        if(newVal.length >= 3) {
                            newVal = newVal.slice(0, 2) + ' / ' + newVal.slice(0, 2)
                        }
                    }
                    this.$emit('update:expiryDate', newVal)
                }
            },
            localSecureCode: {
                get() {
                    return this.secureCode
                },
                set(newVal) {
                    this.$emit('update:secureCode', newVal)
                }
            },
        },
        methods: {
            getFormattedNumber(num) {
                return num
                .replace(/\D/g, '')
                .slice(0, 16)
                .replace(/(.{4})/g, '$1 ')
                .trim()
            }
        },
    }
</script>

<style scoped>
.container {
    width: 320px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    background: rgb(227, 227, 227);
    border-radius: 10px;
    padding: 20px;
}
.card {
    display: flex;
    gap: 10px;
    flex-direction: column;
}
input {
    padding: 5px;
    border-radius: 5px;
}
.card_number {
    grid-column: 1 / 3;
}
</style>