import { SpotifyAudioAnalysis } from '@spotify/types/tracks.types';

export const AudioAnalysis: SpotifyAudioAnalysis = {
    meta: {
        analyzer_version: '4.0.0',
        platform: 'Linux',
        detailed_status: 'OK',
        status_code: 0,
        timestamp: 1658875295,
        analysis_time: 17.58555,
        input_process: 'libvorbisfile L+R 44100->22050',
    },
    track: {
        num_samples: 9066496,
        duration: 411.17896,
        sample_md5: '',
        offset_seconds: 0,
        window_seconds: 0,
        analysis_sample_rate: 22050,
        analysis_channels: 1,
        end_of_fade_in: 0.0,
        start_of_fade_out: 405.14758,
        loudness: -10.426,
        tempo: 123.008,
        tempo_confidence: 0.646,
        time_signature: 4,
        time_signature_confidence: 0.756,
        key: 7,
        key_confidence: 0.924,
        mode: 1,
        mode_confidence: 0.683,
        codestring: 'eJxdnQmW7KiSRLeSSxAz7H9jZdcMRcSrc7rrP5EhCRzHz',
        code_version: 3.15,
        echoprintstring: 'eJzsvQuS5LiOLLolUeJ3OfzufwnX3VWTzIp7hLC80Tk98',
        echoprint_version: 4.12,
        synchstring: 'eJxVlYuRJDEIQ1NxCAb_80_snkRPbV3dzbbbxiAkoDP7',
        synch_version: 1.0,
        rhythmstring: 'eJylXVu246oOnEqGYN4w_4ldVCWBsJ3sPut-pHc6sTEI',
        rhythm_version: 1.0,
    },
    bars: [
        {
            start: 0.50051,
            duration: 1.95366,
            confidence: 0.303,
        },
        {
            start: 2.45417,
            duration: 1.95146,
            confidence: 0.222,
        },
        {
            start: 4.40563,
            duration: 1.94883,
            confidence: 0.491,
        },
        {
            start: 6.35446,
            duration: 1.95316,
            confidence: 0.31,
        },
        {
            start: 8.30762,
            duration: 1.95099,
            confidence: 0.191,
        },
        {
            start: 10.25861,
            duration: 1.95099,
            confidence: 0.482,
        },
    ],
    beats: [
        {
            start: 0.50051,
            duration: 0.49092,
            confidence: 0.862,
        },
        {
            start: 0.99143,
            duration: 0.48665,
            confidence: 0.903,
        },
        {
            start: 1.47808,
            duration: 0.48778,
            confidence: 0.914,
        },
        {
            start: 1.96587,
            duration: 0.48831,
            confidence: 0.83,
        },
        {
            start: 2.45417,
            duration: 0.48787,
            confidence: 0.844,
        },
        {
            start: 2.94204,
            duration: 0.48656,
            confidence: 0.834,
        },
    ],
    sections: [
        {
            start: 0.0,
            duration: 16.11292,
            confidence: 1.0,
            loudness: -20.802,
            tempo: 123.003,
            tempo_confidence: 0.827,
            key: 7,
            key_confidence: 0.072,
            mode: 1,
            mode_confidence: 0.305,
            time_signature: 4,
            time_signature_confidence: 0.0,
        },
        {
            start: 16.11292,
            duration: 78.53811,
            confidence: 0.964,
            loudness: -11.09,
            tempo: 123.019,
            tempo_confidence: 0.836,
            key: 7,
            key_confidence: 0.807,
            mode: 1,
            mode_confidence: 0.628,
            time_signature: 4,
            time_signature_confidence: 0.68,
        },
        {
            start: 94.65103,
            duration: 19.50703,
            confidence: 0.193,
            loudness: -9.706,
            tempo: 123.002,
            tempo_confidence: 0.783,
            key: 7,
            key_confidence: 0.718,
            mode: 1,
            mode_confidence: 0.645,
            time_signature: 4,
            time_signature_confidence: 1.0,
        },
    ],
    segments: [
        {
            start: 0.0,
            duration: 0.18263,
            confidence: 0.0,
            loudness_start: -18.243,
            loudness_max_time: 0.0116,
            loudness_max: -15.743,
            loudness_end: 0.0,
            pitches: [
                0.287, 0.605, 0.501, 0.341, 0.952, 1.0, 0.568, 0.72, 0.225,
                0.255, 0.471, 0.086,
            ],
            timbre: [
                33.97, -130.345, -104.125, 95.649, 9.519, -106.829, -28.137,
                2.549, -13.913, 6.41, -24.339, 5.45,
            ],
        },
        {
            start: 0.18263,
            duration: 0.30127,
            confidence: 0.258,
            loudness_start: -37.719,
            loudness_max_time: 0.0229,
            loudness_max: -32.675,
            loudness_end: 0.0,
            pitches: [
                0.114, 0.398, 0.337, 0.052, 0.026, 0.056, 0.102, 1.0, 0.256,
                0.044, 0.033, 0.08,
            ],
            timbre: [
                25.259, -127.411, -82.703, -24.67, 12.18, -44.607, 10.996,
                -16.649, -15.05, -9.119, -12.244, 6.912,
            ],
        },
    ],
    tatums: [
        {
            start: 0.50051,
            duration: 0.24546,
            confidence: 0.862,
        },
        {
            start: 0.74597,
            duration: 0.24546,
            confidence: 0.862,
        },
        {
            start: 0.99143,
            duration: 0.24333,
            confidence: 0.903,
        },
        {
            start: 1.23476,
            duration: 0.24333,
            confidence: 0.903,
        },
        {
            start: 1.47808,
            duration: 0.24389,
            confidence: 0.914,
        },
        {
            start: 1.72198,
            duration: 0.24389,
            confidence: 0.914,
        },
    ],
};
