# Container

Container with max-width and padding

<WvContainer>Just a container</WvContainer>

```js
import WvContainer from '@wevisdemo/ui/components/container.{vue,jsx,svelte}';
```

```vue
<WvContainer>Just a container</WvContainer>
```

## Props

| Name    | Type   | Default |
| ------- | ------ | ------- |
| heading | string |         |

## Slot / Children

Items apeended after heading

## Examples

**With heading and slot**

<WvContainer heading="เกี่ยวกับโครงการ">
  <p>
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</WvContainer>

```vue
<WvContainer heading="เกี่ยวกับโครงการ">
  <p>
    dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged. It was popularised in the
    1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum.
  </p>
</WvContainer>
```