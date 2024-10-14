[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / [tinyColor](../modules/tinyColor.md) / Constructor

# Interface: Constructor

[tinyColor](../modules/tinyColor.md).Constructor

## Callable

### Constructor

▸ **Constructor**(`color?`, `opts?`): [`Instance`](tinyColor.Instance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color?` | [`ColorInput`](../modules/tinyColor.md#colorinput) |
| `opts?` | [`ConstructorOptions`](tinyColor.ConstructorOptions.md) |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:75

## Table of contents

### Constructors

- [constructor](tinyColor.Constructor.md#constructor)

### Properties

- [hexNames](tinyColor.Constructor.md#hexnames)
- [names](tinyColor.Constructor.md#names)

### Methods

- [equals](tinyColor.Constructor.md#equals)
- [fromRatio](tinyColor.Constructor.md#fromratio)
- [isReadable](tinyColor.Constructor.md#isreadable)
- [mix](tinyColor.Constructor.md#mix)
- [mostReadable](tinyColor.Constructor.md#mostreadable)
- [random](tinyColor.Constructor.md#random)
- [readability](tinyColor.Constructor.md#readability)

## Constructors

### constructor

• **new Constructor**(`color?`, `opts?`): [`Instance`](tinyColor.Instance.md)

Create a tinycolor instance of the color named.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color?` | [`ColorInput`](../modules/tinyColor.md#colorinput) | the color as one of the valid color input format. |
| `opts?` | [`ConstructorOptions`](tinyColor.ConstructorOptions.md) | - |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:74

## Properties

### hexNames

• **hexNames**: `Object`

key: hex value
value: string name ex. hexnames["f00"] --> "red"

#### Type declaration

| Name | Type |
| :------ | :------ |
| `000` | ``"black"`` |
| `000080` | ``"navy"`` |
| `00008b` | ``"darkblue"`` |
| `0000cd` | ``"mediumblue"`` |
| `006400` | ``"darkgreen"`` |
| `008000` | ``"green"`` |
| `008080` | ``"teal"`` |
| `008b8b` | ``"darkcyan"`` |
| `00bfff` | ``"deepskyblue"`` |
| `00ced1` | ``"darkturquoise"`` |
| `00f` | ``"blue"`` |
| `00fa9a` | ``"mediumspringgreen"`` |
| `00ff7f` | ``"springgreen"`` |
| `0f0` | ``"lime"`` |
| `0ff` | ``"aqua"`` \| ``"cyan"`` |
| `191970` | ``"midnightblue"`` |
| `1e90ff` | ``"dodgerblue"`` |
| `20b2aa` | ``"lightseagreen"`` |
| `228b22` | ``"forestgreen"`` |
| `2e8b57` | ``"seagreen"`` |
| `2f4f4f` | ``"darkslategray"`` \| ``"darkslategrey"`` |
| `32cd32` | ``"limegreen"`` |
| `3cb371` | ``"mediumseagreen"`` |
| `40e0d0` | ``"turquoise"`` |
| `4169e1` | ``"royalblue"`` |
| `4682b4` | ``"steelblue"`` |
| `483d8b` | ``"darkslateblue"`` |
| `48d1cc` | ``"mediumturquoise"`` |
| `4b0082` | ``"indigo"`` |
| `556b2f` | ``"darkolivegreen"`` |
| `5f9ea0` | ``"cadetblue"`` |
| `6495ed` | ``"cornflowerblue"`` |
| `663399` | ``"rebeccapurple"`` |
| `66cdaa` | ``"mediumaquamarine"`` |
| `696969` | ``"dimgray"`` \| ``"dimgrey"`` |
| `6a5acd` | ``"slateblue"`` |
| `6b8e23` | ``"olivedrab"`` |
| `708090` | ``"slategray"`` \| ``"slategrey"`` |
| `789` | ``"lightslategray"`` \| ``"lightslategrey"`` |
| `7b68ee` | ``"mediumslateblue"`` |
| `7cfc00` | ``"lawngreen"`` |
| `7fff00` | ``"chartreuse"`` |
| `7fffd4` | ``"aquamarine"`` |
| `800000` | ``"maroon"`` |
| `800080` | ``"purple"`` |
| `808000` | ``"olive"`` |
| `808080` | ``"gray"`` \| ``"grey"`` |
| `87ceeb` | ``"skyblue"`` |
| `87cefa` | ``"lightskyblue"`` |
| `8a2be2` | ``"blueviolet"`` |
| `8b0000` | ``"darkred"`` |
| `8b008b` | ``"darkmagenta"`` |
| `8b4513` | ``"saddlebrown"`` |
| `8fbc8f` | ``"darkseagreen"`` |
| `90ee90` | ``"lightgreen"`` |
| `9370db` | ``"mediumpurple"`` |
| `9400d3` | ``"darkviolet"`` |
| `98fb98` | ``"palegreen"`` |
| `9932cc` | ``"darkorchid"`` |
| `9acd32` | ``"yellowgreen"`` |
| `a0522d` | ``"sienna"`` |
| `a52a2a` | ``"brown"`` |
| `a9a9a9` | ``"darkgray"`` \| ``"darkgrey"`` |
| `add8e6` | ``"lightblue"`` |
| `adff2f` | ``"greenyellow"`` |
| `afeeee` | ``"paleturquoise"`` |
| `b0c4de` | ``"lightsteelblue"`` |
| `b0e0e6` | ``"powderblue"`` |
| `b22222` | ``"firebrick"`` |
| `b8860b` | ``"darkgoldenrod"`` |
| `ba55d3` | ``"mediumorchid"`` |
| `bc8f8f` | ``"rosybrown"`` |
| `bdb76b` | ``"darkkhaki"`` |
| `c0c0c0` | ``"silver"`` |
| `c71585` | ``"mediumvioletred"`` |
| `cd5c5c` | ``"indianred"`` |
| `cd853f` | ``"peru"`` |
| `d2691e` | ``"chocolate"`` |
| `d2b48c` | ``"tan"`` |
| `d3d3d3` | ``"lightgray"`` \| ``"lightgrey"`` |
| `d8bfd8` | ``"thistle"`` |
| `da70d6` | ``"orchid"`` |
| `daa520` | ``"goldenrod"`` |
| `db7093` | ``"palevioletred"`` |
| `dc143c` | ``"crimson"`` |
| `dcdcdc` | ``"gainsboro"`` |
| `dda0dd` | ``"plum"`` |
| `deb887` | ``"burlywood"`` |
| `e0ffff` | ``"lightcyan"`` |
| `e6e6fa` | ``"lavender"`` |
| `e9967a` | ``"darksalmon"`` |
| `ea7e5d` | ``"burntsienna"`` |
| `ee82ee` | ``"violet"`` |
| `eee8aa` | ``"palegoldenrod"`` |
| `f00` | ``"red"`` |
| `f08080` | ``"lightcoral"`` |
| `f0e68c` | ``"khaki"`` |
| `f0f` | ``"fuchsia"`` \| ``"magenta"`` |
| `f0f8ff` | ``"aliceblue"`` |
| `f0fff0` | ``"honeydew"`` |
| `f0ffff` | ``"azure"`` |
| `f4a460` | ``"sandybrown"`` |
| `f5deb3` | ``"wheat"`` |
| `f5f5dc` | ``"beige"`` |
| `f5f5f5` | ``"whitesmoke"`` |
| `f5fffa` | ``"mintcream"`` |
| `f8f8ff` | ``"ghostwhite"`` |
| `fa8072` | ``"salmon"`` |
| `faebd7` | ``"antiquewhite"`` |
| `faf0e6` | ``"linen"`` |
| `fafad2` | ``"lightgoldenrodyellow"`` |
| `fdf5e6` | ``"oldlace"`` |
| `ff0` | ``"yellow"`` |
| `ff1493` | ``"deeppink"`` |
| `ff4500` | ``"orangered"`` |
| `ff6347` | ``"tomato"`` |
| `ff69b4` | ``"hotpink"`` |
| `ff7f50` | ``"coral"`` |
| `ff8c00` | ``"darkorange"`` |
| `ffa07a` | ``"lightsalmon"`` |
| `ffa500` | ``"orange"`` |
| `ffb6c1` | ``"lightpink"`` |
| `ffc0cb` | ``"pink"`` |
| `ffd700` | ``"gold"`` |
| `ffdab9` | ``"peachpuff"`` |
| `ffdead` | ``"navajowhite"`` |
| `ffe4b5` | ``"moccasin"`` |
| `ffe4c4` | ``"bisque"`` |
| `ffe4e1` | ``"mistyrose"`` |
| `ffebcd` | ``"blanchedalmond"`` |
| `ffefd5` | ``"papayawhip"`` |
| `fff` | ``"white"`` |
| `fff0f5` | ``"lavenderblush"`` |
| `fff5ee` | ``"seashell"`` |
| `fff8dc` | ``"cornsilk"`` |
| `fffacd` | ``"lemonchiffon"`` |
| `fffaf0` | ``"floralwhite"`` |
| `fffafa` | ``"snow"`` |
| `ffffe0` | ``"lightyellow"`` |
| `fffff0` | ``"ivory"`` |

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:288

___

### names

• **names**: `Object`

key: 'real' color name
value: hex value ex. names["red"] --> "f00"

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aliceblue` | ``"f0f8ff"`` |
| `antiquewhite` | ``"faebd7"`` |
| `aqua` | ``"0ff"`` |
| `aquamarine` | ``"7fffd4"`` |
| `azure` | ``"f0ffff"`` |
| `beige` | ``"f5f5dc"`` |
| `bisque` | ``"ffe4c4"`` |
| `black` | ``"000"`` |
| `blanchedalmond` | ``"ffebcd"`` |
| `blue` | ``"00f"`` |
| `blueviolet` | ``"8a2be2"`` |
| `brown` | ``"a52a2a"`` |
| `burlywood` | ``"deb887"`` |
| `burntsienna` | ``"ea7e5d"`` |
| `cadetblue` | ``"5f9ea0"`` |
| `chartreuse` | ``"7fff00"`` |
| `chocolate` | ``"d2691e"`` |
| `coral` | ``"ff7f50"`` |
| `cornflowerblue` | ``"6495ed"`` |
| `cornsilk` | ``"fff8dc"`` |
| `crimson` | ``"dc143c"`` |
| `cyan` | ``"0ff"`` |
| `darkblue` | ``"00008b"`` |
| `darkcyan` | ``"008b8b"`` |
| `darkgoldenrod` | ``"b8860b"`` |
| `darkgray` | ``"a9a9a9"`` |
| `darkgreen` | ``"006400"`` |
| `darkgrey` | ``"a9a9a9"`` |
| `darkkhaki` | ``"bdb76b"`` |
| `darkmagenta` | ``"8b008b"`` |
| `darkolivegreen` | ``"556b2f"`` |
| `darkorange` | ``"ff8c00"`` |
| `darkorchid` | ``"9932cc"`` |
| `darkred` | ``"8b0000"`` |
| `darksalmon` | ``"e9967a"`` |
| `darkseagreen` | ``"8fbc8f"`` |
| `darkslateblue` | ``"483d8b"`` |
| `darkslategray` | ``"2f4f4f"`` |
| `darkslategrey` | ``"2f4f4f"`` |
| `darkturquoise` | ``"00ced1"`` |
| `darkviolet` | ``"9400d3"`` |
| `deeppink` | ``"ff1493"`` |
| `deepskyblue` | ``"00bfff"`` |
| `dimgray` | ``"696969"`` |
| `dimgrey` | ``"696969"`` |
| `dodgerblue` | ``"1e90ff"`` |
| `firebrick` | ``"b22222"`` |
| `floralwhite` | ``"fffaf0"`` |
| `forestgreen` | ``"228b22"`` |
| `fuchsia` | ``"f0f"`` |
| `gainsboro` | ``"dcdcdc"`` |
| `ghostwhite` | ``"f8f8ff"`` |
| `gold` | ``"ffd700"`` |
| `goldenrod` | ``"daa520"`` |
| `gray` | ``"808080"`` |
| `green` | ``"008000"`` |
| `greenyellow` | ``"adff2f"`` |
| `grey` | ``"808080"`` |
| `honeydew` | ``"f0fff0"`` |
| `hotpink` | ``"ff69b4"`` |
| `indianred` | ``"cd5c5c"`` |
| `indigo` | ``"4b0082"`` |
| `ivory` | ``"fffff0"`` |
| `khaki` | ``"f0e68c"`` |
| `lavender` | ``"e6e6fa"`` |
| `lavenderblush` | ``"fff0f5"`` |
| `lawngreen` | ``"7cfc00"`` |
| `lemonchiffon` | ``"fffacd"`` |
| `lightblue` | ``"add8e6"`` |
| `lightcoral` | ``"f08080"`` |
| `lightcyan` | ``"e0ffff"`` |
| `lightgoldenrodyellow` | ``"fafad2"`` |
| `lightgray` | ``"d3d3d3"`` |
| `lightgreen` | ``"90ee90"`` |
| `lightgrey` | ``"d3d3d3"`` |
| `lightpink` | ``"ffb6c1"`` |
| `lightsalmon` | ``"ffa07a"`` |
| `lightseagreen` | ``"20b2aa"`` |
| `lightskyblue` | ``"87cefa"`` |
| `lightslategray` | ``"789"`` |
| `lightslategrey` | ``"789"`` |
| `lightsteelblue` | ``"b0c4de"`` |
| `lightyellow` | ``"ffffe0"`` |
| `lime` | ``"0f0"`` |
| `limegreen` | ``"32cd32"`` |
| `linen` | ``"faf0e6"`` |
| `magenta` | ``"f0f"`` |
| `maroon` | ``"800000"`` |
| `mediumaquamarine` | ``"66cdaa"`` |
| `mediumblue` | ``"0000cd"`` |
| `mediumorchid` | ``"ba55d3"`` |
| `mediumpurple` | ``"9370db"`` |
| `mediumseagreen` | ``"3cb371"`` |
| `mediumslateblue` | ``"7b68ee"`` |
| `mediumspringgreen` | ``"00fa9a"`` |
| `mediumturquoise` | ``"48d1cc"`` |
| `mediumvioletred` | ``"c71585"`` |
| `midnightblue` | ``"191970"`` |
| `mintcream` | ``"f5fffa"`` |
| `mistyrose` | ``"ffe4e1"`` |
| `moccasin` | ``"ffe4b5"`` |
| `navajowhite` | ``"ffdead"`` |
| `navy` | ``"000080"`` |
| `oldlace` | ``"fdf5e6"`` |
| `olive` | ``"808000"`` |
| `olivedrab` | ``"6b8e23"`` |
| `orange` | ``"ffa500"`` |
| `orangered` | ``"ff4500"`` |
| `orchid` | ``"da70d6"`` |
| `palegoldenrod` | ``"eee8aa"`` |
| `palegreen` | ``"98fb98"`` |
| `paleturquoise` | ``"afeeee"`` |
| `palevioletred` | ``"db7093"`` |
| `papayawhip` | ``"ffefd5"`` |
| `peachpuff` | ``"ffdab9"`` |
| `peru` | ``"cd853f"`` |
| `pink` | ``"ffc0cb"`` |
| `plum` | ``"dda0dd"`` |
| `powderblue` | ``"b0e0e6"`` |
| `purple` | ``"800080"`` |
| `rebeccapurple` | ``"663399"`` |
| `red` | ``"f00"`` |
| `rosybrown` | ``"bc8f8f"`` |
| `royalblue` | ``"4169e1"`` |
| `saddlebrown` | ``"8b4513"`` |
| `salmon` | ``"fa8072"`` |
| `sandybrown` | ``"f4a460"`` |
| `seagreen` | ``"2e8b57"`` |
| `seashell` | ``"fff5ee"`` |
| `sienna` | ``"a0522d"`` |
| `silver` | ``"c0c0c0"`` |
| `skyblue` | ``"87ceeb"`` |
| `slateblue` | ``"6a5acd"`` |
| `slategray` | ``"708090"`` |
| `slategrey` | ``"708090"`` |
| `snow` | ``"fffafa"`` |
| `springgreen` | ``"00ff7f"`` |
| `steelblue` | ``"4682b4"`` |
| `tan` | ``"d2b48c"`` |
| `teal` | ``"008080"`` |
| `thistle` | ``"d8bfd8"`` |
| `tomato` | ``"ff6347"`` |
| `turquoise` | ``"40e0d0"`` |
| `violet` | ``"ee82ee"`` |
| `wheat` | ``"f5deb3"`` |
| `white` | ``"fff"`` |
| `whitesmoke` | ``"f5f5f5"`` |
| `yellow` | ``"ff0"`` |
| `yellowgreen` | ``"9acd32"`` |

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:132

## Methods

### equals

▸ **equals**(`color1?`, `color2?`): `boolean`

Compares two colors. Each colors can be any color inputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1?` | [`ColorInput`](../modules/tinyColor.md#colorinput) |
| `color2?` | [`ColorInput`](../modules/tinyColor.md#colorinput) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:88

___

### fromRatio

▸ **fromRatio**(`ratio?`): [`Instance`](tinyColor.Instance.md)

Create a tinycolor instance based off the relative values.
Works with any color formats

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratio?` | [`ColorInputWithoutInstance`](../modules/tinyColor.md#colorinputwithoutinstance) | the relative color/hue values to apply to the new instance. |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:83

___

### isReadable

▸ **isReadable**(`color1`, `color2`, `wcag2?`): `boolean`

Ensure that foreground and background color combinations meet WCAG2 guidelines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color1` | [`ColorInput`](../modules/tinyColor.md#colorinput) | the fore color wanted. |
| `color2` | [`ColorInput`](../modules/tinyColor.md#colorinput) | the back color wanted. |
| `wcag2?` | [`WCAG2Options`](tinyColor.WCAG2Options.md) | WCAG option. If the entire object is absent, function use the default of level:"AA" and size:"small". |

#### Returns

`boolean`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:116

___

### mix

▸ **mix**(`color1`, `color2`, `amount?`): [`Instance`](tinyColor.Instance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorInput`](../modules/tinyColor.md#colorinput) |
| `color2` | [`ColorInput`](../modules/tinyColor.md#colorinput) |
| `amount?` | `number` |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:95

___

### mostReadable

▸ **mostReadable**(`baseColor`, `colorList`, `args?`): [`Instance`](tinyColor.Instance.md)

Given a base color and a list of possible foreground or background colors for that base,
 returns the most readable color. Optionally returns Black or White if the most readable color is unreadable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | [`ColorInput`](../modules/tinyColor.md#colorinput) | - |
| `colorList` | [`ColorInput`](../modules/tinyColor.md#colorinput)[] | - |
| `args?` | [`MostReadableArgs`](tinyColor.MostReadableArgs.md) | and object with extra arguments |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:126

___

### random

▸ **random**(): [`Instance`](tinyColor.Instance.md)

Returns a random color

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:93

___

### readability

▸ **readability**(`color1`, `color2`): `number`

Compares the two colors and returns the constrast between two colors as a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color1` | [`ColorInput`](../modules/tinyColor.md#colorinput) | the first color to be used in the comparison. |
| `color2` | [`ColorInput`](../modules/tinyColor.md#colorinput) | the second color to be used in the comparison. |

#### Returns

`number`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:103
