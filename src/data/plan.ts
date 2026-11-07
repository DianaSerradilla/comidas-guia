// Source: the nutritionist's plan, supplied by the owner. Numbers are verbatim; do not recompute.

export type Macros = {
  kcal?: number;
  p?: number;
  c?: number;
  g?: number;
  /** Extra remark attached to a macro value, e.g. "24.5 g netos". */
  cNote?: string;
};

export type Item = {
  name: string;
  detail?: string;
  macros?: Macros;
  note?: string;
};

export type Group = {
  title: string;
  hint?: string;
  /** "uno" means choose one item; "todo" means every item is part of the meal. */
  mode: 'uno' | 'todo';
  items: Item[];
};

export type Block = {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  tone: 'lime' | 'lemon' | 'tomato' | 'tangerine' | 'beet' | 'leaf' | 'grape';
  name: string;
  summary: string;
  total: Macros;
  intro?: string;
  groups: Group[];
};

export const dailyTotal: Required<Pick<Macros, 'kcal' | 'p' | 'c' | 'g'>> = {
  kcal: 1700,
  p: 141,
  c: 119,
  g: 72,
};

export const blocks: Record<Block['id'], Block> = {
  1: {
    id: 1,
    tone: 'lime',
    name: 'Pre-entreno express',
    summary: '35 a 45 kcal',
    total: {},
    intro:
      'Solo se usa como adelanto cuando vas en ayunas a primera hora. Se descuenta la fruta o la galleta del desayuno.',
    groups: [
      {
        title: 'Opciones',
        mode: 'uno',
        items: [
          {
            name: 'Cítrica',
            detail: '70 g de naranja (media unidad) + café negro o té',
            macros: { kcal: 32, p: 0.6, c: 8, g: 0.1 },
          },
          {
            name: 'Potencia rápida',
            detail: '50 g de banana (media unidad chica) + café negro o té',
            macros: { kcal: 45, p: 0.5, c: 11.5, g: 0.1 },
          },
          {
            name: 'Crunch dulce',
            detail: '1 galleta de arroz (8 g) + 10 g de mermelada La Campagnola BC',
            macros: { kcal: 41, p: 0.6, c: 9, g: 0.2 },
          },
        ],
      },
    ],
  },

  2: {
    id: 2,
    tone: 'lemon',
    name: 'Desayuno',
    summary: '365 kcal',
    total: { kcal: 365, p: 24, c: 27, g: 18 },
    intro:
      'Si entrenaste a la mañana y ya comiste la fruta en el pre-entreno, este plato queda en ~330 kcal.',
    groups: [
      {
        title: 'Fijo',
        mode: 'todo',
        items: [
          {
            name: 'Proteína',
            detail: '2 huevos enteros + 2 claras (revueltos o a la plancha con rocío vegetal)',
            macros: { kcal: 177, p: 19.6, c: 1.2, g: 9.6 },
          },
          {
            name: 'Lácteo y untable',
            detail:
              '15 g de Queso Crema Tregar + 30 ml de Leche Protein La Serenísima (para el café o té)',
            macros: { kcal: 46, p: 3.2, c: 1.5, g: 3.0 },
          },
          {
            name: 'Grasa',
            detail: '12 g de nueces (3 mariposas)',
            macros: { kcal: 78, p: 1.8, c: 1.6, g: 7.8 },
          },
          {
            name: 'Fruta',
            detail: '70 g de naranja (media unidad)',
            note: 'Solo si no la usaste en el pre-entreno.',
            macros: { kcal: 32, p: 0.6, c: 8, g: 0.1 },
          },
        ],
      },
      {
        title: 'Carbohidrato base',
        mode: 'uno',
        items: [
          {
            name: 'Galletas de arroz',
            detail: '3 galletas (24 g)',
            macros: { kcal: 90, p: 2.0, c: 19.5, g: 0.5 },
          },
          {
            name: 'Pan masa madre',
            detail: '1 rebanada de Pan Masa Madre Bimbo (38 g)',
            macros: { kcal: 95, p: 3.5, c: 18.0, g: 1.0 },
          },
        ],
      },
    ],
  },

  3: {
    id: 3,
    tone: 'tomato',
    name: 'Comida con carbos',
    summary: '445 kcal',
    total: { kcal: 445, p: 43, c: 40, g: 12 },
    intro: 'Se arma en tres pasos.',
    groups: [
      {
        title: 'Paso 1. Proteína',
        hint: '200 a 230 kcal · 38 a 41 g de proteína',
        mode: 'uno',
        items: [
          {
            name: 'Pollo',
            detail: '180 g de suprema en crudo (hervida o plancha)',
            macros: { kcal: 198, p: 41.0, c: 0, g: 2.2 },
          },
          {
            name: 'Atún y huevo',
            detail: '1 lata de atún al natural escurrido (120 g) + 1 huevo duro entero',
            macros: { kcal: 202, p: 34.3, c: 0.4, g: 6.0 },
          },
          {
            name: 'Bife de chorizo',
            detail: '160 g en crudo a la plancha (sin grasa visible)',
            note: 'Máximo 3 veces por semana.',
            macros: { kcal: 235, p: 34.0, c: 0, g: 10.5 },
          },
        ],
      },
      {
        title: 'Paso 2. Carbohidrato',
        hint: '180 kcal · 38 a 40 g de carbohidratos',
        mode: 'uno',
        items: [
          {
            name: 'Arroz blanco',
            detail:
              '50 g en crudo, sin salsa TAU. O 40 g en crudo + 2 cdas (30 g) de Salsa TAU Teriyaki',
            macros: { kcal: 180, p: 3.5, c: 40, g: 0.3 },
          },
          {
            name: 'Papa o camote',
            detail:
              '200 g en crudo, sin salsa. O 170 g en crudo + 2 cdas (30 g) de TAU Teriyaki',
            macros: { kcal: 172, p: 3.6, c: 38, g: 0.2 },
          },
          {
            name: 'Lentejas',
            detail: '200 g ya hervidas (del freezer)',
            note: 'Si eliges lentejas, la proteína del Paso 1 baja a 140 g de pollo para compensar las calorías y los 18 g de proteína vegetal.',
            macros: { kcal: 230, p: 18.0, c: 40, g: 0.8, cNote: '24,5 g netos' },
          },
          {
            name: 'Rapiditas XL',
            detail: '1,5 unidades Bimbo (67 g)',
            macros: { kcal: 195, p: 5.2, c: 33, g: 4.5 },
          },
          {
            name: 'Pan masa madre',
            detail: '2 rebanadas de Pan Masa Madre Bimbo (76 g)',
            macros: { kcal: 190, p: 7.0, c: 36, g: 2.0 },
          },
        ],
      },
      {
        title: 'Paso 3. Vegetales y toque de grasa',
        hint: '45 kcal',
        mode: 'todo',
        items: [
          {
            name: 'Vegetales',
            detail: 'Ensalada verde libre, o 100 g de espárragos',
          },
          {
            name: 'Grasa',
            detail:
              '1 cdita (5 ml) de aceite de oliva, o 1 cda (15 g) de TAU Coleslaw si comiste pollo o atún',
          },
        ],
      },
    ],
  },

  4: {
    id: 4,
    tone: 'tangerine',
    name: 'Media tarde',
    summary: '350 kcal',
    total: { kcal: 350, p: 30, c: 28, g: 13 },
    intro: 'Si entrenas a la tarde es tu pre-entreno: 1 a 1,5 hs antes de entrenar.',
    groups: [
      {
        title: 'Opciones',
        mode: 'uno',
        items: [
          {
            name: 'Pancake Granger completo',
            detail:
              'En sartén. Mezcla: 40 g de mix Pancake Granger + 1 huevo entero + 50 ml de Leche Protein La Serenísima. Toppings: 15 g de Queso Crema Tregar + 8 g de nueces (2 mariposas) + salsa 0 kcal (o 15 g de dulce La Campagnola BC) + 1 fruta a elección (50 g de banana, 75 g de manzana verde u 80 g de frutos rojos).',
            note: 'Si usas 20 g de dulce La Campagnola clásico con azúcar, usa 35 g de mix Granger.',
            macros: { kcal: 355, p: 29.5, c: 31.0, g: 12.0 },
          },
          {
            name: 'Pasta proteica crunch',
            detail:
              'Bowl sin cocción. 1 scoop (30 g) de Whey Integralmedica + 40 ml de Leche Protein (revolver hasta formar pasta) + 15 g de Quinoa Pop + 12 g de nueces (3 mariposas) + media fruta chica (opcional si necesitas más carbos).',
            macros: { kcal: 335, p: 28.5, c: 24.0, g: 11.5 },
          },
          {
            name: 'Batido y tostada',
            detail:
              '1 scoop (30 g) de Whey Integralmedica en 200 ml de Leche Protein + 1 rebanada de Pan Masa Madre Bimbo (38 g) + 15 g de Queso Crema Tregar + 15 g de dulce La Campagnola BC.',
            macros: { kcal: 345, p: 34.0, c: 29.0, g: 6.5 },
          },
          {
            name: 'Salada',
            detail: 'Exactamente igual al desayuno.',
          },
        ],
      },
    ],
  },

  5: {
    id: 5,
    tone: 'leaf',
    name: 'Comida sin carbos',
    summary: '395 kcal',
    total: { kcal: 395, p: 42, c: 8, g: 21 },
    intro: 'Se arma en tres pasos.',
    groups: [
      {
        title: 'Paso 1. Proteína',
        hint: 'Peso en crudo',
        mode: 'uno',
        items: [
          {
            name: 'Pollo',
            detail: '180 g de suprema hervida o a la plancha',
            macros: { kcal: 198, p: 41, g: 2.2 },
          },
          {
            name: 'Atún y huevos',
            detail: '1 lata de atún al natural (120 g) + 1 huevo entero duro + 1 clara dura',
            macros: { kcal: 219, p: 38, g: 6 },
          },
          {
            name: 'Bife de chorizo',
            detail: '170 g en crudo a la plancha',
            macros: { kcal: 250, p: 36, g: 11.5 },
          },
          {
            name: 'Omelette o revuelto',
            detail: '2 huevos enteros + 5 claras',
            macros: { kcal: 230, p: 30, g: 10 },
          },
        ],
      },
      {
        title: 'Paso 2. Fibra y volumen, sin almidón',
        hint: '35 a 45 kcal',
        mode: 'todo',
        items: [
          {
            name: 'Hojas verdes libres',
            detail: 'Espinaca, lechuga, rúcula, tomate',
          },
          {
            name: 'Y a elegir',
            detail: '150 g de espárragos, o 150 g de calabaza naranja en crudo',
            macros: { p: 2, c: 8, g: 0 },
          },
        ],
      },
      {
        title: 'Paso 3. Grasa con pollo, atún o huevos',
        hint: '110 a 120 kcal · 11 a 12 g de grasa',
        mode: 'uno',
        items: [
          { name: 'Palta', detail: '70 g, sin salsas' },
          { name: 'Nueces', detail: '15 g (4 mariposas)' },
          { name: 'Queso', detail: '30 g de port salut o tybo (suma 7 g de proteína extra)' },
          { name: 'Palta y Coleslaw', detail: '40 g de palta + 1 cda (15 g) de TAU Coleslaw' },
          { name: 'Solo Coleslaw', detail: '2 cdas (30 g) de TAU Coleslaw, sin palta ni nueces' },
        ],
      },
      {
        title: 'Paso 3. Grasa con bife de chorizo',
        hint: 'La carne ya aporta grasa, suma solo una',
        mode: 'uno',
        items: [
          { name: 'Palta', detail: '35 g' },
          { name: 'Nueces', detail: '2 nueces (8 g)' },
          { name: 'Coleslaw', detail: '1 cda (15 g) de TAU Coleslaw' },
        ],
      },
    ],
  },

  6: {
    id: 6,
    tone: 'grape',
    name: 'Postre fijo',
    summary: '145 a 170 kcal',
    total: {},
    groups: [
      {
        title: 'Opciones',
        mode: 'uno',
        items: [
          {
            name: 'Barrita entera',
            detail: '1 barrita de Chocolate Águila 60% (14 g) + 1 galletita Cachafaz (15 g)',
            macros: { kcal: 143, p: 2.1, c: 16.0, g: 7.8 },
          },
          {
            name: 'Media barrita',
            detail: 'Media barrita de Chocolate Águila 60% (7 g) + 2 galletitas Cachafaz (30 g)',
            macros: { kcal: 173, p: 2.8, c: 21.5, g: 8.2 },
          },
        ],
      },
    ],
  },
};

export type Slot = {
  block: Block['id'];
  title: string;
  note?: string;
};

export const schedules = {
  manana: {
    label: 'Mañana',
    slots: [
      { block: 1, title: 'Pre-entreno', note: '15 min antes de salir' },
      { block: 2, title: 'Desayuno post-entreno', note: 'Sin la fruta que ya usaste en el pre-entreno' },
      { block: 3, title: 'Almuerzo con carbos', note: 'Recarga muscular principal' },
      { block: 4, title: 'Media tarde', note: 'Sostén de energía' },
      { block: 5, title: 'Cena sin carbos', note: 'Proteína, vegetales y grasas' },
      { block: 6, title: 'Postre' },
    ] satisfies Slot[],
  },
  tarde: {
    label: '19:00',
    slots: [
      { block: 2, title: 'Desayuno completo', note: 'Incluye la media fruta' },
      { block: 5, title: 'Almuerzo sin carbos', note: 'Proteína, vegetales y grasas' },
      { block: 4, title: 'Media tarde y pre-entreno', note: '1 a 1,5 hs antes de entrenar' },
      { block: 3, title: 'Cena post-entreno con carbos', note: 'Recarga muscular principal' },
      { block: 6, title: 'Postre' },
    ] satisfies Slot[],
  },
};

export const cheatMeal = {
  title: 'Comida libre',
  summary: '2 por semana',
  rules: [
    'Mantén intactos los bloques de pre-entreno, desayuno, media tarde y comida sin carbos.',
    'Reemplaza la comida con carbos y el postre por tu comida libre (600 a 700 kcal de margen).',
    'Asegura siempre una base de 35 a 40 g de proteína.',
  ],
  examples: [
    '130 g de carne magra en crudo + 2 porciones de pizza',
    'Poke con doble proteína',
    'Sushi con sashimi',
  ],
};
