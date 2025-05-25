# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


- pnpm install -D @vitejs/plugin-vue-jsx

# ວຽກບ້ານໃຫ້ກັບນັກສຶກສາ 

1. ລະບົບກວດສອບອາຍຸ ຕົວຢ່າງ: 
    - ອາຍຸ 0 - 18 ປີ ໃຫ້ສະເເດງວ່າ ຍັງເເມ່ນໄວລຸ້ນ
    - ອາຍຸ 19 - 30 ປີ ໃຫ້ສະເເດງວ່າ ເປັນຜູ້ໃຫຍ່ເເລ້ວ
    - ອາຍຸ 31 - 45 ປີ ໃຫ້ສະເເດງວ່າ ເປັນໄວກາງຄົນເເລ້ວ
    - ອາຍຸ 46 - 99 ປີ ໃຫ້ສະເເດງວ່າ ເຖົ້າເເລ້ວ
    - 100 ປີຂື້ນໄປ ໃຫ້ສະເເດງວ່າ ອາຍຸເກີນກຳນົດ

2. ລະບົບຕັດເກຮດນັກສຶກສາ 
    - 0 - 49 = F
    - 50 - 60 = D
    - 61 - 65 = D+
    - 66 - 70 = C
    - 71 - 80 = C+
    - 81 - 90 = B
    - 91 - 100 = A 
    - ຖ້າຫລາຍກວ່າ 100 = ບໍ່ສາມາດຕັດເກຮດໄດ້
3. ສ້າງປຸ່ມ Btn ເເລ້ວກຳນົດໃຫ້ປຸ່ມມີ background = ສີເເດງ ເເລ້ວຖ້າກົດໃສປຸ່ມ ໃຫ້ປ່ຽນ background = ສີດຳ
4. ມີຂໍ້ມູນນັກສຶກສາ
    const students = reactive([
        {
            "id": 1,
            "name": "alex",
            "age": 20
        },
        {
            "id": 2,
            "name": "john",
            "age": 18
        },
        {
            "id": 3,
            "name": "sandy",
            "age": 25
        },
        {
            "id": 4,
            "name": "jane",
            "age": 15
        }
    ])

    - ເເລ້ວເອົາຂໍ້ມູນກ່ອນນີ້ໄປ Loop ເເລ້ວກວດສອບເງື່ອນໄຂ ຖ້າຫາກອາຍຸເກີນ 20 ປີເເລ້ວບໍ່ຕ້ອງເອົາມາສະເເດງ