import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8f9ff',
    },
    container: {
        flex: 1,
    },
    header: {
        marginTop:'10%',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    progressContainer: {
        alignItems: 'center',
    },
    progressBar: {
        width: width * 0.6,
        height: 4,
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        borderRadius: 2,
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#667eea',
        borderRadius: 2,
    },
    progressText: {
        fontSize: 12,
        color: '#667eea',
        fontWeight: '500',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: width * 0.8,
        height: height * 0.45,
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2d3748',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 34,
    },
    description: {
        fontSize: 16,
        color: '#4a5568',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    highlightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#667eea',
    },
    breatheIcon: {
        marginRight: 12,
    },
    breatheEmoji: {
        fontSize: 20,
    },
    highlight: {
        fontSize: 14,
        color: '#667eea',
        fontWeight: '600',
        flex: 1,
        lineHeight: 20,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 20,
    },
    backButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        minWidth: 100,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#667eea',
        fontSize: 16,
        fontWeight: '600',
    },
    nextButton: {
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#667eea',
        padding:15,  
        shadowColor: '#667eea',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    nextButtonGradient: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 25,
        minWidth: 120,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})