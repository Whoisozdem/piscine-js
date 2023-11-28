function getAcceleration(givob) {
    if (givob.f && givob.m) {
        return givob.f/givob.m
    } else if (givob.Δv && givob.Δt) {
        return givob.Δv/givob.Δt
    } else if (givob.d && givob.t) {
        return (2*givob.d)/(givob.t*givob.t)
    } else {
        return "impossible"
    }
}