export default function formatSlug(input: string) {
    const slug = input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
    return slug
}